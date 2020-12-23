import ReactMarkdown from 'react-markdown'

export async function getStaticProps() {
  const url = new URL('/abouts', process.env.CMS_HOST).href
  const res = await fetch(url)
  const data = await res.json()
  if (!data || data.length === 0) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      data: data[0]
    },
  }
}

const About = (props) => {
  return (
    <section>
      <h1>Je suis</h1>
      <ReactMarkdown className="content">
        {props.data.description}
      </ReactMarkdown>
    </section>
  )
}

export default About
