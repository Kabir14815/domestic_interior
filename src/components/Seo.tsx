import { useEffect } from 'react'
import { absoluteUrl } from '../data/siteSeo'

export type SeoProps = {
  title: string
  description: string
  path: string
  keywords?: string
  image?: string
  type?: 'website' | 'article'
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
  noIndex?: boolean
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

function upsertJsonLd(id: string, data: Record<string, unknown> | Record<string, unknown>[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/** Updates document head for SPA routes (title, meta, OG, canonical, JSON-LD). */
export default function Seo({
  title,
  description,
  path,
  keywords,
  image = '/domestic-dial-logo.png',
  type = 'website',
  jsonLd,
  noIndex = false,
}: SeoProps) {
  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : ''

  useEffect(() => {
    const url = absoluteUrl(path)
    const imageUrl = absoluteUrl(image)

    document.title = title
    upsertMeta('name', 'description', description)
    if (keywords) upsertMeta('name', 'keywords', keywords)
    upsertMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large')
    upsertMeta('name', 'geo.region', 'IN-PB')
    upsertMeta('name', 'geo.placename', 'North India')
    upsertMeta('name', 'geo.position', '30.6425;76.8173')
    upsertMeta('name', 'ICBM', '30.6425, 76.8173')
    upsertMeta('name', 'author', 'Domestic Dial')

    upsertLink('canonical', url)

    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:site_name', 'Domestic Dial')
    upsertMeta('property', 'og:locale', 'en_IN')
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', imageUrl)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', imageUrl)

    if (jsonLdKey) {
      upsertJsonLd('seo-jsonld', JSON.parse(jsonLdKey) as Record<string, unknown> | Record<string, unknown>[])
    }
  }, [title, description, path, keywords, image, type, jsonLdKey, noIndex])

  return null
}
