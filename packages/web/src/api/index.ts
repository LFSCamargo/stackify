import axios from 'axios'
import { localSafeStorage } from '~/utils'

export const api = axios.create({
  baseURL: "http://localhost:5000"
})

api.interceptors.request.use((config) => {
  const token = localSafeStorage.getToken();

  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: token
    }
  }
  
  return config
})