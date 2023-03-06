import React, { useRef, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CToaster,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectAuthError,
  selectIsExpired,
  selectJwt,
  selectToken,
  userLogin,
} from 'src/redux/reducers/authSlice'
import { showToast } from '../../../helpers'
import { useTranslation } from 'react-i18next'
import { STATUS_COLOR } from '../../../constants/status'

const Login = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const toaster = useRef()

  const token = useSelector(selectToken)
  const jwt = useSelector(selectJwt)
  const jwtIsExpired = useSelector(selectIsExpired)
  // selectAuthError
  const error = useSelector(selectAuthError)
  const { t, i18n } = useTranslation()

  const [username, setUsername] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  const [validated, setValidated] = useState(false)
  const [toast, addToast] = useState(0)

  const handleSubmit = (event) => {
    const form = event.currentTarget

    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      return
    }

    setValidated(true)

    dispatch(userLogin({ username, password }))

    addToast(
      showToast(t, { title: 'successful', message: 'welcome', status: STATUS_COLOR.SUCCESSFUL }),
    )
  }

  if (token && !jwtIsExpired) {
    return <Navigate to="/" />
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm noValidate validated={validated} onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        onChange={(e) => {
                          setUsername(e.target.value)
                        }}
                        autoComplete="username"
                      />
                      <CFormFeedback invalid>Please provide a valid username.</CFormFeedback>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        onChange={(e) => {
                          setPassword(e.target.value)
                        }}
                        autoComplete="current-password"
                      />
                      <CFormFeedback invalid>Please enter valid password.</CFormFeedback>
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type="submit" color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </div>
  )
}

export default Login
