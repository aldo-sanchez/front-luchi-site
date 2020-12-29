import { Instagram, Linkedin, Youtube } from 'react-feather'

const Footer = () => {
  return (
    <footer>
      <span className="copyright">&copy; {new Date().getFullYear()}</span>
      <a href="https://instagram.com" target="_blank">
        <Instagram />
      </a>
      <a href="https://linkedin.com" target="_blank">
        <Linkedin />
      </a>
      <a href="https://youtube.com" target="_blank">
        <Youtube />
      </a>
    </footer>
  )
}

export default Footer
