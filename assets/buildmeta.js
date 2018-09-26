export default ({
  title,
  url,
  siteName,
  desc,
  image,
  width,
  height,
  author,
  twitterCreator
}, anotherMeta, anotherLink) => {
  let meta = []
  if (desc) meta.push({hid: 'description', name: 'description', content: desc})
  if (author) meta.push({hid: 'author', name: 'author', content: author})
  if (title) meta.push({hid: 'og:title', name: 'og:title', content: title})
  if (desc) meta.push({hid: 'og:description', name: 'og:description', content: desc})
  if (url) meta.push({hid: 'og:url', name: 'og:url', content: url})
  if (siteName) meta.push({hid: 'og:site_name', name: 'og:site_name', content: siteName})
  if (image) meta.push({hid: 'og:image', name: 'og:image', content: image})
  if (width) meta.push({hid: 'og:image:width', name: 'og:image:width', content: width})
  if (height) meta.push({hid: 'og:image:height', name: 'og:image:height', content: height})
  if (title) meta.push({hid: 'twitter:title', name: 'twitter:title', content: title})
  if (desc) meta.push({hid: 'twitter:description', name: 'twitter:description', content: desc})
  if (image) meta.push({hid: 'twitter:image', name: 'twitter:image', content: imgae})
  if (twitterCreator) meta.push({hid: 'twitter:creator', name: 'twitter:creator', content: twitterCreator})

  if (Array.isArray(anotherMeta)) {
    anotherMeta.forEach((current, index, array) => {
      if (current.content && current.name) {
        meta.push(current)
      }
    })
  }

  let link = []
  if (url) link.push({hid: 'canonical', rel: 'canonical', href: url})

  if (Array.isArray(anotherLink)) {
    anotherLink.forEach((current, index, array) => {
      if (current.content && current.name) {
        meta.push(current)
      }
    })
  }

  return { meta, link }
}
