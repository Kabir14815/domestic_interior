import { ExternalLink } from 'lucide-react'

export default function InstagramReels() {
  return (
    <div className="instagram-section">
      <div className="instagram-section__header">
        <h3>Instagram Reels</h3>
        <p>3D walkthroughs, VR previews & project updates</p>
      </div>
      <div className="instagram-section__cta">
        <p>
          Instagram doesn&apos;t allow embedding full profiles. Open our Reels for the latest tech-forward
          content.
        </p>
        <a
          href="https://instagram.com/domesticdial"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-section__link"
        >
          Watch on Instagram
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  )
}
