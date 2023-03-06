import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getParameters, updateParameter } from '../../api/parameter'

const initialState = {
  status: 'idle',
  parameters: [],
}
export const load = createAsyncThunk('parameter/load', async () => {
  const response = await getParameters()
  return response.data
})

export const update = createAsyncThunk('parameter/update', async (parameterId, payload) => {
  const response = await updateParameter(parameterId, payload)
  return response.data
})

export const parameterSlice = createSlice({
  name: 'parameter',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(load.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(load.fulfilled, (state, action) => {
        state.status = 'idle'
        state.parameters = action.payload
      })
  },
})

export const selectParameters = (state) => state.parameter.parameters

export default parameterSlice.reducer
