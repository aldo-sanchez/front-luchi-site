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
                  active: route.path === router.pathname,
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
