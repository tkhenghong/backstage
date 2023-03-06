import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createUser, deleteUser, editUser, getUserInfo, getUsers } from '../../api/user'

const initialState = {
  loading: true,
  value: 0,
  status: 'idle',
  users: [],
  user: undefined,
}

export const load = createAsyncThunk('user/load', async (amount) => {
  const response = await getUsers()
  return response.data
})

export const loadUserInfo = createAsyncThunk('user/loadInfo', async (userId) => {
  const response = await getUserInfo(userId)
  return response.data
})

export const create = createAsyncThunk('user/create', async (amount) => {
  const response = await createUser()
  return response.data
})

export const edit = createAsyncThunk('user/edit', async (userId, payload) => {
  const response = await editUser(userId, payload)
  return response.data
})

export const remove = createAsyncThunk('user/remove', async (userId) => {
  const response = await deleteUser(userId)
  return response.data
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(load.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(load.fulfilled, (state, action) => {
        state.status = 'idle'
        state.users = action.payload
      })
      .addCase(loadUserInfo.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadUserInfo.fulfilled, (state, action) => {
        state.status = 'idle'
        state.user = action.payload
      })
  },
})

export const selectUsers = (state) => state.user.users
export const selectUser = (state) => state.user.user
export const selectLoading = (state) => state.user.loading

export default userSlice.reducer
