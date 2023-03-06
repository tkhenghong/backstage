import axios from 'axios'

const BASE_URL = require('../config').BASE_URL

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    }
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // Any status.js code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  (error) => {
    // Any status.js codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
})
