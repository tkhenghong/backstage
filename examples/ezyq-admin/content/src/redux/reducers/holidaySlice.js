import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteHoliday, getHolidayInfo, getHolidays, updateHoliday } from '../../api/holiday'

const initialState = {
  value: 0,
  status: 'idle',
  holidays: [],
  holiday: undefined,
}
export const load = createAsyncThunk('holiday/load', async () => {
  const response = await getHolidays()
  return response.data
})

export const loadHolidayInfo = createAsyncThunk('holiday/loadHolidayInfo', async () => {
  const response = await getHolidayInfo()
  return response.data
})

export const update = createAsyncThunk('holiday/update', async ({ holidayId, payload }) => {
  const response = await updateHoliday(holidayId, payload)
  return response.data
})

export const remove = createAsyncThunk('holiday/remove', async (holidayId) => {
  const response = await deleteHoliday(holidayId)
  return response.data
})

export const holidaySlice = createSlice({
  name: 'holiday',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(load.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(load.fulfilled, (state, action) => {
        state.status = 'idle'
        state.holidays = action.payload
      })
      .addCase(loadHolidayInfo.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadHolidayInfo.fulfilled, (state, action) => {
        state.status = 'idle'
        state.holiday = action.payload
      })
  },
})

export const selectHolidays = (state) => state.holiday.holidays

export const selectHoliday = (state) => state.holiday.holiday

export default holidaySlice.reducer
