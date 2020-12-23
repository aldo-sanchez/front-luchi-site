import Link from 'next/link'
import { useRouter } from 'next/router'

const routes = [
  { name: 'about', path: '/about' },
  { name: 'news', path: '/news' },
  { name: 'gallery', path: '/gallery' },
  { name: 'blog', path: 'blog' },
]

const Navigation = () => {
  const router = useRouter()
  return (
    <nav>
      <ul>
        {routes.map((route) => {
          return (
            <li
              key={route.name}
              className={route.path === router.pathname ? 'active': ''}
            >
              <Link href={route.path}>
                <a>{route.name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
