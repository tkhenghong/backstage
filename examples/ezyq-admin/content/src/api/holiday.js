import axios from 'axios'
import { ALL, STATE_CODE } from '../constants/state_code'

const api = 'holiday/api/'

export const getHolidays = async (filter) => {
  // return axios.get(`${api}${queryParams(filter)}`)
  return { data }
}

export const getHolidayInfo = async (branch_code) => {
  // return axios.get(`${api}${branch_code}`)
  return { data: data[0] }
}

export const updateHoliday = async (branch_code, payload) => {
  return axios.put(`${api}${branch_code}`, payload)
}

export const deleteHoliday = async (branch_code) => {
  return axios.delete(`${api}${branch_code}`)
}

const data = [
  {
    holiday_code: 'H001',
    holiday_name: 'New Years Day',
    states: [
      STATE_CODE.MELAKA,
      STATE_CODE.NEGERI_SEMBILAN,
      STATE_CODE.PAHANG,
      STATE_CODE.PENANG,
      STATE_CODE.PERAK,
      STATE_CODE.SABAH,
      STATE_CODE.SARAWAK,
      STATE_CODE.SELANGOR,
    ],
    start_date: '01/01/2023',
    end_date: '01/01/2023',
  },
  {
    holiday_code: 'H002',
    holiday_name: 'Thaipusam',
    states: [
      STATE_CODE.JOHOR,
      STATE_CODE.KEDAH,
      STATE_CODE.KUALA_LUMPUR,
      STATE_CODE.NEGERI_SEMBILAN,
      STATE_CODE.PENANG,
      STATE_CODE.PERAK,
      STATE_CODE.PUTRAJAYA,
      STATE_CODE.SELANGOR,
    ],
    start_date: '01/01/2023',
    end_date: '01/01/2023',
  },
  {
    holiday_code: 'H003',
    holiday_name: 'Chinese New Year',
    states: ALL,
    start_date: '01/02/2023',
    end_date: '01/02/2023',
  },
  {
    holiday_code: 'H004',
    holiday_name: 'Hari Raya Aidilfitri',
    states: ALL,
    start_date: '02/05/2023',
    end_date: '03/05/2023',
  },
]
