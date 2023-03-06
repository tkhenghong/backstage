import axios from 'axios'

const api = 'auth/api/'
const accessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcwNDA2Njk1OSwiaWF0IjoxNjcyMjQyODExfQ.ueh3D6Wp-q7z1P8MvvpC_LHy4R0zfNH3zcR4ws9h1_I'

export const login = async (filter) => {
  // return axios.post(`${api}`, filter)
  // return Promise.reject('Test error')
  return {
    accessToken,
    user: userInfo,
  } // TEST
}

export const getAuthInfo = async () => {
  // return axios.get(`${api}`, filter)
  return {
    user: userInfo,
  } // TEST
}

export const logout = async (filter) => {
  return axios.post(`${api}`, filter)
}

export const updateUserProfile = async (payload) => {
  return axios.put(`${api}`, payload)
}

const userInfo = {
  name: 'Test name',
  role: 'SUPER_ADMIN',
}
