"""Regenerate public favicons for search and browsers (tight crop, contrast for small sizes)."""
from __future__ import annotations

import os
from PIL import Image, ImageEnhance, ImageFilter

ROOT = os.path.join(os.path.dirname(__file__), "..", "public")
SRC = os.path.join(ROOT, "domestic-dial-logo.png")


def main() -> None:
    im = Image.open(SRC).convert("RGBA")
    w, h = im.size
    z = 0.70
    cw, ch = int(w * z), int(h * z)
    x0, y0 = (w - cw) // 2, (h - ch) // 2
    base = im.crop((x0, y0, x0 + cw, y0 + ch))

    def enhance(img: Image.Image) -> Image.Image:
        out = ImageEnhance.Contrast(img).enhance(1.32)
        out = ImageEnhance.Brightness(out).enhance(1.10)
        return ImageEnhance.Color(out).enhance(1.18)

    m = base.resize((256, 256), Image.Resampling.LANCZOS)
    m = enhance(m)
    m = m.filter(
        ImageFilter.UnsharpMask(radius=0.4, percent=100, threshold=1)
    )

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
