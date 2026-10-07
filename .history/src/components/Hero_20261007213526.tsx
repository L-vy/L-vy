import Icon from './Icon'
import { site } from '../data/site'
import { useGoTo } from './useGoTo'
export default function Hero() {
  const go = useGoTo()
  return (
    <section id="home" className="hero">
      <div className="hero-top"><p className="path"><b>Portfolio</b>/Home</p><button className="contact-link" onClick={() => go('contact', true)}>Contact Me</button></div>
      <div className="hero-grid">
        <img className="hero-photo" src={site.images.profile} alt={`Portrait of ${site.name}`}/>
        <div className='hero-content'>
          <img className="hello" src={site.images.hello} alt="Hello!" />
          <h1>I’m {site.name}</h1>
          <p className="lead">{site.bio}</p>
          <div className="actions">
            <button className="btn" onClick={() => go('recent-works')}>View my work <Icon name="arrow-right" size={22} /></button>
            <a className="link-dotted grey" href={site.resume} download>Download Resume</a>
          </div>
        </div>
      </div>
      <img className="butterfly" src={site.images.butterfly} alt="" />
    </section>
  )
}
