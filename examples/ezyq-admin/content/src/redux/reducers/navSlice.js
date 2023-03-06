import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarShow: true,
  unfoldable: false,
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setSidebarShow: (state, action) => {
      state.sidebarShow = action.payload
    },
    setSidebarUnfoldable: (state, action) => {
      state.unfoldable = action.payload
    },
  },
})

export const { setSidebarShow, setSidebarUnfoldable } = navSlice.actions

export const selectSidebarShow = (state) => state.nav.sidebarShow
export const selectSidebarUnfoldable = (state) => state.nav.unfoldable

export default navSlice.reducer
