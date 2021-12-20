import api from './apiConfig'

// export const postNewPost = async (body) => {
//   try {
//     const res = await api.post('/posts', post)
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }

export const getPosts = async () => {
  try {
    const res = await api.get('/posts')
    return res.data
  } catch (error) {
    console.log("error")
  }
}