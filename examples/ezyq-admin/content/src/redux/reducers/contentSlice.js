import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getContents, updateContent } from '../../api/content'

const initialState = {
  value: 0,
  status: 'idle',
  contents: {},
}
export const load = createAsyncThunk('content/load', async () => {
  const response = await getContents()
  return response.data
})

export const update = createAsyncThunk('content/update', async (contentId, payload) => {
  const response = await updateContent(contentId, payload)
  return response.data
})

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(load.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(load.fulfilled, (state, action) => {
        state.status = 'idle'
        state.contents = action.payload
      })
  },
})

export const selectContents = (state) => state.content.contents

export default contentSlice.reducer
