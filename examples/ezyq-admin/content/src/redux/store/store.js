import { configureStore } from '@reduxjs/toolkit'
import { createBrowserHistory } from 'history'

import navReducer from '../reducers/navSlice'
import authReducer from '../reducers/authSlice'
import languageReducer from '../reducers/languageSlice'
import appointmentReducer from '../reducers/appointmentSlice'
import userReducer from '../reducers/userSlice'
import branchReducer from '../reducers/branchSlice'
import holidayReducer from '../reducers/holidaySlice'
import serviceReducer from '../reducers/serviceSlice'
import parameterReducer from '../reducers/parameterSlice'
import contentReducer from '../reducers/contentSlice'

export const history = createBrowserHistory()

const store = configureStore({
  reducer: {
    nav: navReducer,
    auth: authReducer,
    language: languageReducer,
    appointment: appointmentReducer,
    user: userReducer,
    branch: branchReducer,
    holiday: holidayReducer,
    service: serviceReducer,
    parameter: parameterReducer,
    content: contentReducer,
    history,
  },
})

export default store
