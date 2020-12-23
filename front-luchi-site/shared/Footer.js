import { Instagram, Linkedin } from 'react-feather'

const Footer = () => {
  return (
    <footer>
      <span>&copy; {new Date().getFullYear()}</span>
      <a href="https://instagram.com" target="_blank">
        <Instagram />
      </a>
      <a href="https://linkedin.com" target="_blank">
        <Linkedin />
      </a>
    </footer>
  )
}

export default Footer
