import axios from 'axios'

const api = 'service/api/'

export const getServices = async (filter) => {
  // return axios.get(`${api}${queryParams(filter)}`)
  return { data }
}

export const getServiceInfo = async (serviceId) => {
  return axios.get(`${api}/${serviceId}`)
}

export const createService = async (payload) => {
  return axios.post(`${api}`, payload)
}

export const updateService = async (serviceId, payload) => {
  return axios.put(`${api}${serviceId}`, payload)
}

export const deleteService = async (serviceId) => {
  return axios.delete(`${api}${serviceId}`)
}

const data = [
  { _id: '', service_name: 'Test Service', tooltips: 'Test Tooltips Description' },
  { _id: '', service_name: 'Test Service', tooltips: 'Test Tooltips Description' },
  { _id: '', service_name: 'Test Service', tooltips: 'Test Tooltips Description' },
  { _id: '', service_name: 'Test Service', tooltips: 'Test Tooltips Description' },
]
