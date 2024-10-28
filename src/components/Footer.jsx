import { ali } from '../assets/data'
import { linkedInIcon, githubIcon } from '../assets/icons'
import './styles/footer.css'

const Footer = () => {
  return (
    <footer id="contacts">
        <div className="container">
          <div className="footer">
              <div className="arrow-item">
                <h1 className="arrow-text flex">
                  <span>{">"}Contacts</span><div className="blink text-cursor"/>
                </h1>
              </div>
              <div className="contacts">
                <a href="mailto:stackingali@gmail.com" className="email">
                  stackingali@gmail.com
                </a>
                <div className="socials">
                  <a href={ali.contacts.linkedin} target="_blank" rel="noreferrer">
                    {linkedInIcon}
                  </a>
                  <a href={ali.contacts.github} target="_blank" rel="noreferrer">
                    {githubIcon}
                  </a>
                </div>
              </div>
              <div className="footer-bottom">
                
              </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer