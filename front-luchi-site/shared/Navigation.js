import Link from 'next/link'

const Navigation = ({ }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a>news</a>
          </Link>
        </li>
        <li>
          <Link href="/gallery">
            <a>gallery</a>
          </Link>
        </li>
        <li>
          <Link href="blog">
            <a>blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
