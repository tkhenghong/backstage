import axios from 'axios'

const api = 'branch/api/'

export const getBranches = async (filter) => {
  // return axios.get(`${api}${queryParams(filter)}`)
  return { data }
}
export const getBranchInfo = async (branch_code) => {
  return axios.get(`${api}${branch_code}`)
}

export const activateBranch = async (branch_code) => {
  return axios.put(`${api}${branch_code}/activate`)
}

export const deactivateBranch = async (branch_code) => {
  return axios.put(`${api}${branch_code}/deactivate`)
}

export const updateBranch = async (branch_code, payload) => {
  return axios.put(`${api}${branch_code}`, payload)
}

const data = [
  {
    branch: 'Test Branch',
    branch_code: 'B001',
    district: 'Yonkers',
    state: 'NY',
    address: '123 Test St',
  },
  {
    branch: 'Test Branch',
    branch_code: 'B002',
    district: 'Hartford',
    state: 'CT',
    address: '123 Test St',
  },
  {
    branch: 'Test Branch',
    branch_code: 'B003',
    district: 'Tampa',
    state: 'FL',
    address: '123 Test St',
  },
  {
    branch: 'Test Branch',
    branch_code: 'B004',
    district: 'Dallas',
    state: 'TX',
    address: '123 Test St',
  },
]
