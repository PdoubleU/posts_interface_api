export const searchPost = (post, input) => {
  const title = post.title
  const name = post.name

  return title.toLowerCase().includes(input) || name.toLowerCase().includes(input)
}
