"""Regenerate public favicons for search and browsers (contrast + edge fix for Chrome)."""
from __future__ import annotations

import math
import os
from PIL import Image, ImageEnhance, ImageFilter

# Fills square corners outside the round seal; match logo surround (pure black on current asset).
_MAT = (0, 0, 0)

ROOT = os.path.join(os.path.dirname(__file__), "..", "public")
SRC = os.path.join(ROOT, "domestic-dial-logo.png")


def _lum(r: int, g: int, b: int) -> float:
    return (r + g + b) / 3.0


def _row_mean_lum(img: Image.Image, y: int) -> float:
    w = img.size[0]
    s = 0.0
    for x in range(w):
        r, g, b, _a = img.getpixel((x, y))
        s += _lum(r, g, b)
    return s / w


def _darkest_row_in_band(img: Image.Image, y0: int, y1: int) -> int:
    best_y, best_l = y0, 999.0
    for y in range(y0, min(y1, img.size[1])):
        ml = _row_mean_lum(img, y)
        if ml < best_l:
            best_l, best_y = ml, y
    return best_y


def dampen_top_bottom_halo(img: Image.Image) -> Image.Image:
    """Downscaling pulls bright gold into the top/bottom rows; Chrome then shows a white band."""
    w, h = img.size
    if h < 8:
        return img
    out = img.copy()
    px = out.load()
    # One dark interior row (gold ring sits above/below this band at tiny sizes).
    y0, y1 = h // 4, (3 * h) // 4
    ref_y = _darkest_row_in_band(out, y0, y1 + 1)
    bands = list(range(0, min(3, h // 2))) + list(range(max(0, h - 3), h))
    for y in bands:
        for x in range(w):
            r, g, b, a = px[x, y]
            if a < 200:
                continue
            L = _lum(r, g, b)
            if L < 84:
                continue
            rr, gg, bb, _aa = px[x, ref_y]
            t = min(1.0, (L - 72) / 70.0)
            px[x, y] = (
                int(r * (1 - t) + rr * t),
                int(g * (1 - t) + gg * t),
                int(b * (1 - t) + bb * t),
                a,
            )
    return out


def circular_corner_matte(img: Image.Image, feather: float = 1.35) -> Image.Image:
    """Outside the inscribed circle → solid brand mat (no light resample halo / white box)."""
    w, h = img.size
    cx, cy = (w - 1) * 0.5, (h - 1) * 0.5
    r0 = min(w, h) * 0.5 - 0.01
    r1 = max(0.5, r0 - feather)
    out = img.copy().convert("RGBA")
    px = out.load()
    mr, mg, mb = _MAT
    for y in range(h):
        for x in range(w):
            d = math.hypot(x - cx, y - cy)
            if d >= r0:
                px[x, y] = (mr, mg, mb, 255)
            elif d > r1:
                t = (d - r1) / (r0 - r1)
                r, g, b, a = px[x, y]
                px[x, y] = (
                    int(r * (1 - t) + mr * t),
                    int(g * (1 - t) + mg * t),
                    int(b * (1 - t) + mb * t),
                    a,
                )
    return out


def main() -> None:
    im = Image.open(SRC).convert("RGBA")
    w, h = im.size
    # Full frame: keeps dark mat around the seal so gold never sits on row 0–1
    # after downscale (avoids Chrome’s “white halo” on 16/32 tab icons).
    z = 1.0
    cw, ch = int(w * z), int(h * z)
    x0, y0 = (w - cw) // 2, (h - ch) // 2
    base = im.crop((x0, y0, x0 + cw, y0 + ch))

    def enhance(img: Image.Image) -> Image.Image:
        out = ImageEnhance.Contrast(img).enhance(1.16)
        out = ImageEnhance.Brightness(out).enhance(1.03)
        return ImageEnhance.Color(out).enhance(1.08)

    m = base.resize((256, 256), Image.Resampling.LANCZOS)
    m = enhance(m)
    m = m.filter(ImageFilter.UnsharpMask(radius=0.35, percent=45, threshold=2))

    sizes: list[tuple[int, str]] = [
        (512, "favicon-512x512.png"),
        (192, "favicon-192x192.png"),
        (96, "favicon-96x96.png"),
        (48, "favicon-48x48.png"),
        (32, "favicon-32x32.png"),
        (16, "favicon-16x16.png"),
        (180, "apple-touch-icon.png"),
    ]
    for size, name in sizes:
        r = m.resize((size, size), Image.Resampling.LANCZOS)
        if size <= 48:
            r = dampen_top_bottom_halo(r.convert("RGBA"))
        r = circular_corner_matte(r.convert("RGBA"))
        r.save(os.path.join(ROOT, name), optimize=True, compress_level=9)
        print("wrote", name)

    f48 = Image.open(os.path.join(ROOT, "favicon-48x48.png")).convert("RGBA")
    f32 = Image.open(os.path.join(ROOT, "favicon-32x32.png")).convert("RGBA")
    f16 = Image.open(os.path.join(ROOT, "favicon-16x16.png")).convert("RGBA")
    f48.save(
        os.path.join(ROOT, "favicon.ico"),
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
        append_images=[f32, f16],
    )
    print("wrote favicon.ico")


if __name__ == "__main__":
    main()
