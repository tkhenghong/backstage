import axios from 'axios'

const api = 'parameter/api/'

export const getParameters = async (filter) => {
  // return axios.get(`${api}${queryParams(filter)}`)
  return { data }
}

export const updateParameter = async (parameterId, payload) => {
  return axios.put(`${api}${parameterId}`, payload)
}

const data = [
  {
    parameter_id: 'P001',
    parameter_name: 'Maximum booking per day per customer',
    parameter_value: '',
  },
  {
    parameter_id: 'P002',
    parameter_name: 'Maximum booking per service per day per customer',
    parameter_value: '',
  },
  {
    parameter_id: 'P003',
    parameter_name: 'Maximum appointment available day to displayed',
    parameter_value: '',
  },
  {
    parameter_id: 'P004',
    parameter_name: 'Maximum booking days per contact number/Email/ID for selected services',
    parameter_value: '',
  },
  {
    parameter_id: 'P005',
    parameter_name: 'Selected services to be block',
    parameter_value: '',
  },
  {
    parameter_id: 'P006',
    parameter_name: 'Maximum active booking',
    parameter_value: '',
  },
  {
    parameter_id: 'P007',
    parameter_name: 'Maximum display dates',
    parameter_value: '',
  },
]
