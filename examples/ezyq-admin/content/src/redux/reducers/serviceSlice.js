import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  createService,
  deleteService,
  getServiceInfo,
  getServices,
  updateService,
} from '../../api/service'

const initialState = {
  value: 0,
  status: 'idle',
  services: [],
  service: {},
}
export const load = createAsyncThunk('service/load', async () => {
  const response = await getServices()
  return response.data
})

export const loadServiceInfo = createAsyncThunk('service/loadServiceInfo', async () => {
  const response = await getServiceInfo()
  return response.data
})

export const create = createAsyncThunk('service/create', async (payload) => {
  const response = await createService(payload)
  return response.data
})

export const edit = createAsyncThunk('service/edit', async ({ serviceId, payload }) => {
  const response = await updateService(serviceId, payload)
  return response.data
})

export const remove = createAsyncThunk('service/remove', async (serviceId) => {
  const response = await deleteService(serviceId)
  return response.data
})

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(load.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(load.fulfilled, (state, action) => {
        state.status = 'idle'
        state.services = action.payload
      })
      .addCase(loadServiceInfo.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadServiceInfo.fulfilled, (state, action) => {
        state.status = 'idle'
        state.service = action.payload
      })
  },
})

export const selectServices = (state) => state.service.services

export const selectService = (state) => state.service.service

export default serviceSlice.reducer
