import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '919255045552'
const MESSAGE = 'Hi! I\'d like to book a free consultation for my home project.'

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
      <span>Chat with Us</span>
    </a>
  )
}
