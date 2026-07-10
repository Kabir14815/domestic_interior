import OurWork from '../components/OurWork'
import Seo from '../components/Seo'
import WhatsAppButton from '../components/WhatsAppButton'
import { OUR_WORK_SEO } from '../data/siteSeo'

export default function OurWorkPage() {
  return (
    <main className="page-our-work">
      <Seo
        title={OUR_WORK_SEO.title}
        description={OUR_WORK_SEO.description}
        keywords={OUR_WORK_SEO.keywords}
        path="/our-work"
      />
      <OurWork />
      <WhatsAppButton />
    </main>
  )
}
