import axios from 'axios'

const api = 'content/api/'

export const getContents = async (filter) => {
  // return axios.get(`${api}${queryParams(filter)}`)
  return { data }
}

export const updateContent = async (contentId, payload) => {
  return axios.put(`${api}${contentId}`, payload)
}

const data = [
  {
    branch_name: 'Test Branch',
    branch_code: 'Test Corp',
    district: 'Yonkers',
    state: 'NY',
    address: '123 Test St',
  },
  {
    branch_name: 'Test Branch',
    branch_code: 'Test Corp',
    district: 'Hartford',
    state: 'CT',
    address: '123 Test St',
  },
  {
    branch_name: 'Test Branch',
    branch_code: 'Test Corp',
    district: 'Tampa',
    state: 'FL',
    address: '123 Test St',
  },
  {
    branch_name: 'Test Branch',
    branch_code: 'Test Corp',
    district: 'Dallas',
    state: 'TX',
    address: '123 Test St',
  },
]
