import Icon from './Icon'
import { useGoTo } from './useGoTo'
export default function ContactSection() {
  const go = useGoTo()
  return (
    <section id="contact" className="contact">
      <p className="endnote">Interested in <div className="endnote-highlight">Working Together?</div></p>
      <button className="btn blue" onClick={() => go('contact', true)}>Get in Touch <Icon name="butterfly-cursor" size={34} /></button>
    </section>
  )
}
