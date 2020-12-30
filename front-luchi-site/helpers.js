import readingTime from 'reading-time'

export const utcToLocale = (utcDate) => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }
  return new Date(utcDate).toLocaleDateString(undefined, options)
}

/**
 * 
 * @param {object} content that has __compoent and either content, caption, or quote properties
 */
export const getReadingTimes = (content) => {
  const acceptableComponents = ['blog.content', 'blog.image', 'blog.quote']
  const text = content
    .filter(component => acceptableComponents.includes(component.__component))
    .map(component => component.content || component.caption || component.quote)
    .join('\n')
  return readingTime(text)
}
