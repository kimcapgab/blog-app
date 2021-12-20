import api from './apiConfig'

export const postNewPost = async (body) => {
  try {
    const res = await api.post('/posts', post)
    return res.data
  } catch (error) {
    throw error
  }
}