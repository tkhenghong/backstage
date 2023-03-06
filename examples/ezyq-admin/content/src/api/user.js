import axios from 'axios'

const api = 'users/api/'

export const getUsers = async (filter) => {
  // return axios.get(`${api}${queryParams(filter)}`)
  return { data }
}

export const getUserInfo = async (userId) => {
  return axios.get(`${api}${userId}`)
}

export const createUser = async (payload) => {
  return axios.post(`${api}`, payload)
}

export const editUser = async (userId, payload) => {
  return axios.put(`${api}${userId}`, payload)
}

export const deleteUser = async (userId) => {
  return axios.delete(`${api}${userId}`)
}

/**
 * Mock API data response
 */
const date = new Date().toDateString()
const time = new Date().toTimeString()

const data = [
  {
    userId: '001',
    name: 'Test',
    branch: 'Test Corp',
    district: 'Yonkers',
    state: 'NY',
    date: date,
    time: time,
    service: 'Oil Change',
    reference: '12345',
  },
  {
    userId: '002',
    name: 'Test',
    branch: 'Test Corp',
    district: 'Hartford',
    state: 'CT',
    date: date,
    time: time,
    service: 'Oil Change',
    reference: '12345',
  },
  {
    userId: '003',
    name: 'Test',
    branch: 'Test Corp',
    district: 'Tampa',
    state: 'FL',
    date: date,
    time: time,
    service: 'Oil Change',
    reference: '12345',
  },
  {
    userId: '004',
    name: 'Test',
    branch: 'Test Corp',
    district: 'Dallas',
    state: 'TX',
    date: date,
    time: time,
    service: 'Oil Change',
    reference: '12345',
  },
]
