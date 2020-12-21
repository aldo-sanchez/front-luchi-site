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
  console.log('props?', props)
  return (
    <div>
      <h1>Welcome to the about machine</h1>
      <ReactMarkdown>
        {props.data.description}
      </ReactMarkdown>
    </div>
  )
}

export default About
