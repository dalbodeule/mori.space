export default (title, desc, image, author, anotherMeta) => {
  let result = [
    {name: 'og:title', content: title},
    {name: 'description', content: desc},
    {name: 'og:description', content: desc},
    {name: 'image', content: image},
    {name: 'author', content: author}
  ]
  result.forEach((current, index, array) => {
    if (!current.content) {
      delete array[index]
    }
  })

  if (Array.isArray(anotherMeta)) {
    anotherMeta.forEach((current, index, array) => {
      if (current.content && current.name) {
        result.push({name: current.name, content: current.content})
      }
    })
  }

  return result
}
