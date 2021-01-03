import ReactMarkdown from 'react-markdown'

export async function getStaticProps() {
  const url = new URL('/about', process.env.CMS_HOST).href
  const res = await fetch(url)
  const data = await res.json()
  if (!data) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      data: data
    },
    revalidate: 1,
  }
}

const About = (props) => {
  return (
    <section>
      <h1>Je suis</h1>
      <ReactMarkdown className="content">
        {props.data.content}
      </ReactMarkdown>
    </section>
  )
}

export default About
