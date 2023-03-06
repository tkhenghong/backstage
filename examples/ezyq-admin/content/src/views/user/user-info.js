import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUserInfo, selectUser } from '../../redux/reducers/userSlice'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
  CToaster,
} from '@coreui/react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { showToast } from '../../helpers'
import { useForm } from 'react-hook-form'
import { STATUS_COLOR } from '../../constants/status'

const UserInfo = () => {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const params = useParams()
  const toaster = useRef()
  const form = useForm()
  const data = useSelector(selectUser)
  const [validated, setValidated] = useState(false)
  const [toast, addToast] = useState(0)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = form

  if (params.id) {
    useEffect(() => {
      dispatch(loadUserInfo(params.id))
    }, [])
  }
  const resetForm = (event) => {
    form.reset()
  }
  const onSubmit = () => {
    setValidated(true)

    addToast(
      showToast(t, { title: 'updated', message: 'updated', status: STATUS_COLOR.SUCCESSFUL }),
    )
  }

  return (
    <>
      <CForm validated={validated} onSubmit={handleSubmit(onSubmit)}>
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>{t('users.info.title')}</strong>
              </CCardHeader>
              <CCardBody>
                <div className="mb-3">
                  <CFormLabel htmlFor="nameInput">{t('name')}</CFormLabel>
                  <CFormInput type="text" id="nameInput" placeholder="Your name" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="emailInput">{t('email.address')}</CFormLabel>
                  <CFormInput type="email" id="emailInput" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="descriptionInput">Description</CFormLabel>
                  <CFormTextarea id="descriptionInput" rows="3"></CFormTextarea>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={12}>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton color="link" onClick={() => navigate(-1)}>
                {t('back')}
              </CButton>
              <CButton color="secondary" className="me-md-2" onClick={resetForm}>
                {t('clear')}
              </CButton>
              <CButton color="primary" type="submit">
                {t('submit')}
              </CButton>
            </div>
          </CCol>
        </CRow>
      </CForm>
      <CToaster ref={toaster} push={toast} placement="top-end" />
    </>
  )
}

export default UserInfo
