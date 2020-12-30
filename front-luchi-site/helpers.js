export const utcToLocale = (d) => {
  const date = new Date(d)
  // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleTimeString()
}
