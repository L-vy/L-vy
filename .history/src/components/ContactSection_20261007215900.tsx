import Icon from './Icon'
import { useGoTo } from './useGoTo'
export default function ContactSection() {
  const go = useGoTo()
  return (
    <section id="contact" className="contact">
      <h3>Interested in <b>Working Together?</b></h3>
      <button className="btn blue" onClick={() => go('contact', true)}>Get in Touch <Icon name="butterfly-cursor" size={34} /></button>
    </section>
  )
}
