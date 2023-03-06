import axios from 'axios'
import { ALL } from 'src/constants/state_code'

const api = 'appointment/api/'

export const getAppointments = async (filter) => {
  // return axios.get(`${api}${queryParams(filter)}`)
  return { data }
}

export const downloadAppointmentList = async (filter) => {
  return axios.get(`${api}${queryParams(filter)}/download`)
}

export const getAppointmentInfo = async (appointmentId) => {
  // return axios.get(`${api}${appointmentId}`)
  return { data: appointment }
}

export const makeAppointment = async (payload) => {
  return axios.post(`${api}`, payload)
}

export const editAppointment = async (appointmentId, payload) => {
  return axios.put(`${api}${appointmentId}`, payload)
}

export const deleteAppointment = async (appointmentId) => {
  return axios.delete(`${api}${appointmentId}`)
}

export const getDistricts = async (state) => {
  // return axios.get(`${api}districts/${state}`)
  return { data: districts }
}

export const getBranches = async (district_no) => {
  // return axios.get(`${api}branch/${district_no}`)
  return { data: branches }
}

export const getAvailableDates = async () => {
  // return axios.get(`${api}available-dates`)
  return { data: availableDates }
}

export const getAvailableTimeSlots = async () => {
  // return axios.get(`${api}available-timeslots`)
  return { data: availableTimeSlots }
}

export const getBranchDetails = async (branch_no) => {
  // return axios.get(`${api}branch-details/${branch_no}`)
  return { data: branch }
}

export const cancelBranchAppointment = async () => {
  return axios.get(`${api}cancel-branch-appointment`)
}

export const getBranchAppointmentDetails = async () => {
  // return axios.get(`${api}get-branch-appointment-details`)
  return { data: appointment }
}

export const getNoticeFlag = async () => {
  return axios.get(`${api}noticeFlag`)
}

export const getAppointmentTypes = async () => {
  // return axios.get(`${api}services`)
  return { data: serviceTypes }
}

export const getStates = async () => {
  // return axios.get(`${api}states`)
  return { data: states }
}

export const submitBranchAppointmentDetails = async (appointment) => {
  return axios.post(`${api}`, appointment)
}

/**
 * Mock API data response
 */
const date = new Date().toDateString()
const time = new Date().toTimeString()

const data = [
  {
    branch: 'Test Corp',
    district: 'Yonkers',
    state: 'NY',
    date: date,
    time: time,
    service: 'Oil Change',
    reference: '12345',
  },
  {
    branch: 'Test Corp',
    district: 'Hartford',
    state: 'CT',
    date: date,
    time: time,
    service: 'Oil Change',
    reference: '12345',
  },
  {
    branch: 'Test Corp',
    district: 'Tampa',
    state: 'FL',
    date: date,
    time: time,
    service: 'Oil Change',
    reference: '12345',
  },
  {
    branch: 'Test Corp',
    district: 'Dallas',
    state: 'TX',
    date: date,
    time: time,
    service: 'Oil Change',
    reference: '12345',
  },
]

const serviceTypes = [
  { id: 'S001', name: 'Personal current/savings account and debit card' },
  { id: 'S002', name: 'Online banking account and services' },
  { id: 'S003', name: 'Credit card, investment, insurance and loan/financing' },
  { id: 'S004', name: 'Multiple banking transaction, remittance and fixed deposit and ASNB' },
  { id: 'S005', name: 'Single banking transaction and privilege banking' },
  { id: 'S006', name: 'Hire Purchase and vehicle related services' },
  { id: 'S007', name: 'Premier Wealth services' },
  { id: 'S008', name: 'SME loan/financing' },
  { id: 'S009', name: 'Virtual Sales & Advisory' },
]

const states = ALL

const districts = [
  'Gombak',
  'Hulu Langat',
  'Kepong',
  'Klang',
  'Kuala Langat',
  'Kuala Selangor',
  'Petaling',
  'Sabak Bernam',
  'Sepang',
]

const branches = [
  'Rawang',
  'Taman Melawati',
  'Bandar Baru Selayang',
  'Selayang Jaya',
  'Taman Sri Gombak',
  'Kuala Kubu Bharu',
  'The Reef Rawang',
]

const branch = {
  district: 'Gombak',
  name: 'Rawang',
  address: '17, Jalan bandar Rawang 2 Bandar Baru Rawang 4800 Rawang Selangor',
}

const availableDates = ['2/1/2023', '3/1/2023', '4/1/2023', '5/1/2023']

const availableTimeSlots = [
  '9:30 AM',
  '9:50 AM',
  '10:10 AM',
  '10:30 AM',
  '10:50AM',
  '11:10 AM',
  '11:30 AM',
]

const idType = ['IC Number', 'Passport Number']

const appointment = {
  id: 'A001',
  name: 'Jane',
  idType: 'id.number',
  idNo: '123456-78-9101',
  date: '2/1/2023',
  time: '9:30 AM',
  state: 'SGR',
  district: 'Gombak',
  serviceTypeId: 'S008',
  branchInfo: branch,
  contactNo: '012-3456789',
  email: 'test@gmail.com',
}
