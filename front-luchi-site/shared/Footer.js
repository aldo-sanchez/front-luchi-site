import { Instagram, Linkedin, Youtube } from 'react-feather'

const Footer = () => {
  return (
    <footer>
      <small className="copyright">&copy; {new Date().getFullYear()}</small>
      <span>
        <small>
          <a href="https://instagram.com" target="_blank">
            <Instagram />
          </a>
        </small>
        <small>
          <a href="https://linkedin.com" target="_blank">
            <Linkedin />
          </a>
        </small>
        <small>
          <a href="https://youtube.com" target="_blank">
            <Youtube />
          </a>
        </small>
      </span>
    </footer>
  )
}

export default Footer
