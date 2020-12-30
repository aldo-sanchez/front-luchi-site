import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const routes = [
  { name: 'luisana rivas', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'news', path: '/news' },
  { name: 'gallery', path: '/gallery' },
  { name: 'blog', path: '/blog' },
  { name: 'contact', path: '/contact' },
]

const isActive = (a, b) => {
  const cleanA = a.split('/').filter(p => p !== '')
  const cleanB = b.split('/').filter(p => p !== '')
  return cleanA[0] === cleanB[0]
}

const Navigation = () => {
  const router = useRouter()
  return (
    <nav>
      <ul>
        {routes.map((route) => {
          return (
            <li
              key={route.name}
              className={clsx(
                {
                  active: isActive(route.path, router.pathname),
                  home: route.path === '/',
                }
              )}
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
