import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAuthInfo, login, logout, updateUserProfile } from '../../api/auth'
import { decodeToken, isExpired } from 'react-jwt'

let initialState = {
  status: 'idle',
  authenticated: undefined,
  accessToken: undefined,
  jwt: undefined,
  isExpired: undefined,
  user: undefined,
  error: undefined,
}

const userLogin = createAsyncThunk('auth/login', async (payload) => {
  return login(payload)
})

export const userLogout = createAsyncThunk('auth/logout', async (payload) => {
  const response = await logout(payload)
  return response.data
})

export const getUserInfo = createAsyncThunk('auth/getUserInfo', async (payload) => {
  const { user } = await getAuthInfo()
  return user
})

export const updateProfile = createAsyncThunk('auth/updateProfile', async (payload) => {
  const { user } = await updateUserProfile()
  return user
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loadToken: (state, action) => {
      state.accessToken = localStorage.getItem('accessToken')
      state.jwt = decodeToken(state.accessToken)
      state.isExpired = isExpired(state.accessToken)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = 'loading'
        state.error = undefined
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = 'idle'

        localStorage.setItem('accessToken', action.payload.accessToken)

        state.accessToken = action.payload.accessToken
        state.jwt = decodeToken(state.accessToken)
        state.isExpired = isExpired(state.accessToken)
        state.user = action.payload.user
        state.authenticated = true
        state.error = undefined
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = 'idle'
        state.authenticated = false
        state.error = { message: 'Unable to login. Please try again.' }
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        localStorage.removeItem('accessToken')
        state = initialState
      })
      .addCase(userLogout.rejected, (state, action) => {
        localStorage.removeItem('accessToken')
        state = initialState
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.user = action.payload
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.error = { message: 'Unable to retrieve user info. Please try again later.' }
      })
  },
})

const selectStatus = (state) => state.auth.status
const selectUser = (state) => state.auth.user
const selectToken = (state) => state.auth.accessToken
const selectAuthenticated = (state) => state.auth.authenticated
const selectJwt = (state) => state.auth.jwt
const selectIsExpired = (state) => state.auth.isExpired
const selectAuthError = (state) => state.auth.error

// Export Redux sync actions
export const { loadToken } = authSlice.actions

// Redux async actions
export {
  userLogin,
  selectStatus,
  selectUser,
  selectToken,
  selectAuthenticated,
  selectJwt,
  selectIsExpired,
  selectAuthError,
}

export default authSlice.reducer
