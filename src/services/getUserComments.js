export default function getUserCommnets() {
  const apiUrl = 'http://localhost:3000/'
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      if (Array.isArray(response)) {
        const comments = response.map((comment) => {
          const { firstName, lastName, picture } = comment.owner
          const { text, comments, id } = comment
          return {
            text,
            lastName,
            firstName,
            picture,
            comments,
            id,
          }
        })
        return comments
      }
    })
    .catch((error) => {
      console.log(`Error: No comments found ${error}`)
    })
}
