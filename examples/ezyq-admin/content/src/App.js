import { LocalizationProvider } from '@mui/x-date-pickers'
import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Page401 = React.lazy(() => import('./views/pages/page401/Page401'))

class App extends Component {
  render() {
    return (
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <HashRouter>
          <Suspense fallback={loading}>
            <Routes>
              <Route exact path="/login" name="Login Page" element={<Login />} />
              <Route exact path="/register" name="Register Page" element={<Register />} />
              <Route exact path="/404" name="Page 404" element={<Page404 />} />
              <Route exact path="/500" name="Page 500" element={<Page500 />} />
              <Route exact path="/401" name="Page 401" element={<Page401 />} />
              <Route path="*" name="Home" element={<DefaultLayout />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </LocalizationProvider>
    )
  }
}

export default App
