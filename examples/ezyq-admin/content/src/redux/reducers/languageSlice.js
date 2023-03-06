import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  language: undefined,
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    loadLanguage: (state, action) => {
      if (localStorage.getItem('language')) {
        state.language = localStorage.getItem('language')
      } else {
        state.language = 'en'
        localStorage.setItem('language', 'en')
      }
    },
    updateLanguage: (state, action) => {
      console.log('updateLanguage action: ', action)
      const language = action.payload.language
      localStorage.setItem('language', language)
      state.language = language
    },
  },
})

// Sync actions
export const { loadLanguage, updateLanguage } = languageSlice.actions

// Selectors
const selectLanguage = (state) => state.language

export { selectLanguage }

export default languageSlice.reducer
