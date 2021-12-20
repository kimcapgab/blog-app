import api from './apiConfig'

export const postNewPosts = async (body) => {
  try {
    const res = await api.post('/posts', body)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getPost = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getAllPosts = async () => {
  try {
    const res = await api.get('/posts')
    return res.data
  } catch (error) {
    throw error
  }
}
