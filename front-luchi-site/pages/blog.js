import Link from 'next/link'
import { utcToLocale, getReadingTimes } from '../helpers'

export async function getStaticProps() {
  const url = new URL("/blog-posts", process.env.CMS_HOST).href
  const res = await fetch(url)
  const data = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      data: data.map(post => {
        return {
          id: post.id,
          title: post.title,
          publishedAt: post.published_at,
          readingTime: getReadingTimes(post.content),
        }
      })
    },
  }
}

const MetaBlogPost = ({ title, publishedAt, id }) => {
  return (
    <li className="post">
      <Link href={`/blog/${id}`}>
        <a>
          <h4 className="title">{title}</h4>
        </a>
      </Link>
      <small className="date">{utcToLocale(publishedAt)}</small>
    </li>
  )
}

const Blog = (props) => {
  return (
    <section className="blog">
      <h1>Blog</h1>
      <ul className="blog-list">
        {props.data.map((post) => (
          <li key={post.id} className="post">
            <Link href={`/blog/${post.id}`}>
              <a>
                <h3 className="title">{post.title}</h3>
              </a>
            </Link>
            <small className="date">{utcToLocale(post.publishedAt)} - {post.readingTime.text}</small>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Blog
