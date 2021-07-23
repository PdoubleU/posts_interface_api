export default function (posts, users) {
  if (!posts || !users) throw new Error('Expected two parameters, got one')

  try {
    const unifiedData = [...posts]
    const names = {}

    for (const user of users) {
      names[user.id] = user.name
    }

    for (const post of unifiedData) {
      post.name = names[post.userId]
    }

    return unifiedData
  } catch (e) {
    console.error(e)
  }
}
