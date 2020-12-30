import Link from 'next/link'

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
      data,
    },
  }
}

const MetaBlogPost = ({ title, published_at, id }) => {
  return (
    <li>
      <Link href={`/blog/${id}`}>
        <a>
          <span>{published_at}</span>
          <span>{title}</span>
        </a>
      </Link>
    </li>
  )
}

const Blog = (props) => {
  return (
    <section>
      <h1>Blog</h1>
      <ul>
        {props.data.map((post) => (
          <MetaBlogPost
            key={post.id}
            id={post.id}
            title={post.title}
            published_at={post.published_at}
          />
        ))}
      </ul>
    </section>
  )
}

export default Blog
