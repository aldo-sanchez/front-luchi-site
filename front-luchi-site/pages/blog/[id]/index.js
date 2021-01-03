import ReactMarkdown from "react-markdown/with-html"
import { getReadingTimes, utcToLocale } from "../../../helpers"

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
      readingTime: getReadingTimes(data.content)
    },
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

const BlogPost = ({ title, publishedAt, updatedAt, content, meta, readingTime, ...rest}) => {
  const publishedDate = utcToLocale(publishedAt)
  const updateDate = utcToLocale(updatedAt)
  return (
    <section className="blog-post">
      <header>
        <h2>{title}</h2>
        <span className="meta">
          <small>{readingTime?.text}</small>
          <small>Written: <time dateTime={publishedAt}>{publishedDate}</time>
          {publishedDate !== updateDate && (<> | Updated: <time>{updateDate}</time></>)}
          </small>
        </span>
      </header>
      <hr />
      <article>
        {content?.map(component => {
          switch (component.__component) {
            case 'blog.content': {
              return (
                <ReactMarkdown key={component.id} className="content" linkTarget="_blank" allowDangerousHtml>
                  {component.content}
                </ReactMarkdown>
              )
            }
            case 'blog.video': {
              return (
                <ReactMarkdown key={component.id} className="video" allowDangerousHtml>
                  {component.video_link}
                </ReactMarkdown>
              )
            }
            case 'blog.quote': {
              return (
                <blockquote key={component.id}>
                  <p>{component.quote}</p>
                  {component.author && <p>{component.author}</p>}
                </blockquote>
              )
            }
            case 'blog.image': {
              return (
                <div>
                  <img key={component.id} src={component.image.formats.medium.url} />
                  {component.caption && <figcaption>{component.caption}</figcaption>}
                </div>
              )
            }
            default:
              return undefined
          }
        })}
      </article>
    </section>
  )
}

export default BlogPost
