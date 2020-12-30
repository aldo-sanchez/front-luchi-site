import ReactMarkdown from "react-markdown/with-html"
import { utcToLocale } from "../../../helpers"

export async function getStaticProps(context) {
  const url = new URL(`/blog-posts/${context.params.id}`, process.env.CMS_HOST).href
  const res = await fetch(url)
  const data = await res.json()
  return {
    props: {
      title: data.title,
      publishedAt: data.published_at,
      updatedAt: data.updated_at,
      content: data.content,
      meta: data.meta,
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  const url = new URL(`/blog-posts`, process.env.CMS_HOST).href
  const res = await fetch(url)
  const data = await res.json()
  return {
    paths: data?.map((post) => `/blog/${post.id}`) || [],
    fallback: true,
  }
}

const BlogPost = ({ title, publishedAt, updatedAt, content, meta, ...rest}) => {
  const publishedDate = utcToLocale(publishedAt)
  const updateDate = utcToLocale(updatedAt)
  console.log('content', content)
  return (
    <section>
      <h2>{title}</h2>
      <span>written {publishedDate}</span>
      {publishedDate !== updateDate && <span>last updated {updateDate}</span>}
      {content.map(component => {
        switch (component.__component) {
          case 'blog.content': {
            return (
              <ReactMarkdown key={component.id} className="content">
                {component.content}
              </ReactMarkdown>
            )
          }
          case 'blog.video': {
            console.log(component.video_link)
            return (
              <ReactMarkdown key={component.id} className="content" allowDangerousHtml>
                {component.video_link}
              </ReactMarkdown>
            )
          }
          case 'blog.quote': {
            return (
              <blockquote key={component.id}>
                <p>{component.quote}</p>
                <p>{component.author}</p>
              </blockquote>
            )
          }
          case 'blog.image': {
            return (
              <div>
                <img key={component.id} src={component.image.formats.large.url} />
                <p>{component.caption}</p>
              </div>
            )
          }
          default:
            return undefined
        }
      })}
    </section>
  )
}

export default BlogPost
