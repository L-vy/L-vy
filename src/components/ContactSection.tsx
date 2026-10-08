import { socialLinks } from '../data/site'
import Icon from './Icon'
import { useGoTo } from './useGoTo'
export default function ContactSection() {
  const go = useGoTo()
  return (
    <section id="contact" className="contact">
      <p className="endnote">Interested in <label className="endnote-highlight">Working Together?</label></p>
      {/* <button className="btn blue" onClick={() => go('contact', true)}>Get in Touch <Icon name="butterfly-cursor" size={16} /></button> */}
      <a href={socialLinks.email} className="btn blue" target="_blank" rel="noreferrer">Get in Touch<Icon name="butterfly-cursor" size={16} />
      </a>
    </section>
  )
}
