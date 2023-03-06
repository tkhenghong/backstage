import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  deleteAppointment,
  downloadAppointmentList,
  editAppointment,
  getAppointmentInfo,
  getAppointments,
  getAppointmentTypes,
  getAvailableDates,
  getAvailableTimeSlots,
  getBranchDetails,
  getBranches,
  getDistricts,
  getStates,
  makeAppointment,
} from '../../api/appointment'
import { STATUS_COLOR } from '../../constants/status'

const initialState = {
  status: 'idle',
  toast: undefined,
  appointments: [],
  appointment: undefined,
  serviceTypes: [],
  states: [],
  districts: [],
  branches: [],
  branch: undefined,
  availableDates: [],
  availableTimeSlots: [],
}

export const updateToast = createAsyncThunk('appointment/updateToast', async (payload) => {
  return payload
})
export const load = createAsyncThunk('appointment/load', async (filter) => {
  const response = await getAppointments(filter)
  // The value we return becomes the `fulfilled` action payload
  return response.data
})

export const download = createAsyncThunk('appointment/download', async (filter) => {
  const response = await downloadAppointmentList(filter)
  return response.data
})

export const loadInfo = createAsyncThunk('appointment/loadInfo', async (accountId) => {
  const response = await getAppointmentInfo(accountId)
  return response.data
})

export const createAppointment = createAsyncThunk(
  'appointment/createAppointment',
  async (payload) => {
    const response = await makeAppointment(payload)
    return response.data
  },
)

export const updateAppointment = createAsyncThunk(
  'appointment/updateAppointment',
  async (payload) => {
    const response = await editAppointment(payload.appointmentId, payload.data)
    return response.data
  },
)

export const removeAppointment = createAsyncThunk(
  'appointment/removeAppointment',
  async (payload) => {
    const response = await deleteAppointment(payload)
    return response.data
  },
)

export const loadStates = createAsyncThunk('appointment/loadStates', async () => {
  const response = await getStates()
  return response.data
})

export const loadDistricts = createAsyncThunk('appointment/loadDistricts', async (state) => {
  const response = await getDistricts(state)
  return response.data
})

export const loadBranches = createAsyncThunk('appointment/loadBranches', async (district_no) => {
  const response = await getBranches()
  return response.data
})

export const loadAvailableDates = createAsyncThunk('appointment/loadAvailableDates', async () => {
  const response = await getAvailableDates()
  return response.data
})

export const loadAvailableTimeSlots = createAsyncThunk(
  'appointment/loadAvailableTimeSlots',
  async () => {
    const response = await getAvailableTimeSlots()
    return response.data
  },
)

export const loadBranchDetails = createAsyncThunk(
  'appointment/loadBranchDetails',
  async (branch_no) => {
    const response = await getBranchDetails(branch_no)
    return response.data
  },
)

export const loadAppointmentTypes = createAsyncThunk(
  'appointment/loadAppointmentTypes',
  async (district_no) => {
    const response = await getAppointmentTypes()
    return response.data
  },
)

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  extraReducers: (builder) => {
    builder
      .addCase(updateToast.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateToast.fulfilled, (state, action) => {
        state.status = 'idle'
        state.toast = action.payload
      })
      .addCase(load.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(load.fulfilled, (state, action) => {
        state.status = 'idle'
        state.appointments = action.payload
      })
      .addCase(download.pending, (state) => {
        state.status = 'loading'
        // TODO: Show download progress
      })
      .addCase(download.fulfilled, (state, action) => {
        state.status = 'idle'
        // TODO: Display success/failed
      })

      .addCase(loadInfo.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadInfo.fulfilled, (state, action) => {
        state.status = 'idle'
        state.appointment = action.payload
      })
      .addCase(createAppointment.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.status = 'idle'
        state.toast = {
          title: 'create',
          message: 'create.successful',
          status: STATUS_COLOR.SUCCESSFUL,
        }
      })
      .addCase(createAppointment.rejected, (state, action) => {
        state.status = 'idle'
        // state.toast = { title: 'failed', message: 'failed', status: STATUS_COLOR.DANGER }
        state.toast = {
          title: 'create',
          message: 'create.successful',
          status: STATUS_COLOR.SUCCESSFUL,
        } // Mock
        // t('datatable.column.header.tooltip', { columnLabel: column.label })
        // t()
      })
      .addCase(updateAppointment.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateAppointment.fulfilled, (state, action) => {
        state.status = 'idle'
        state.toast = {
          title: 'update',
          message: 'update.successful',
          status: STATUS_COLOR.SUCCESSFUL,
        }
      })
      .addCase(updateAppointment.rejected, (state, action) => {
        state.status = 'idle'
        // state.toast = { title: 'failed', message: 'failed', status: STATUS_COLOR.DANGER }
        state.toast = {
          title: 'update',
          message: 'update.successful',
          status: STATUS_COLOR.SUCCESSFUL,
        } // Mock
      })
      .addCase(removeAppointment.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(removeAppointment.fulfilled, (state, action) => {
        state.status = 'idle'
        // Show success/failed
      })
      .addCase(loadStates.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadStates.fulfilled, (state, action) => {
        state.status = 'idle'
        state.states = action.payload
      })
      .addCase(loadDistricts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadDistricts.fulfilled, (state, action) => {
        state.status = 'idle'
        state.districts = action.payload
      })
      .addCase(loadBranches.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadBranches.fulfilled, (state, action) => {
        state.status = 'idle'
        state.branches = action.payload
      })
      .addCase(loadAvailableDates.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadAvailableDates.fulfilled, (state, action) => {
        state.status = 'idle'
        state.availableDates = action.payload
      })
      .addCase(loadAvailableTimeSlots.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadAvailableTimeSlots.fulfilled, (state, action) => {
        state.status = 'idle'
        state.availableTimeSlots = action.payload
      })
      .addCase(loadBranchDetails.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadBranchDetails.fulfilled, (state, action) => {
        state.status = 'idle'
        state.branch = action.payload
      })
      .addCase(loadAppointmentTypes.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadAppointmentTypes.fulfilled, (state, action) => {
        state.status = 'idle'
        state.serviceTypes = action.payload
      })
  },
})

export const selectAppointments = (state) => state.appointment.appointments
export const selectAppointment = (state) => state.appointment.appointment
export const selectStates = (state) => state.appointment.states
export const selectDistricts = (state) => state.appointment.districts
export const selectBranches = (state) => state.appointment.branches
export const selectAvailableDates = (state) => state.appointment.availableDates
export const selectAvailableTimeSlots = (state) => state.appointment.availableTimeSlots
export const selectBranch = (state) => state.appointment.branch
export const selectServiceTypes = (state) => state.appointment.serviceTypes

export const selectToast = (state) => state.appointment.toast

export default appointmentSlice.reducer
