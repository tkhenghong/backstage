import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { getUserInfo, selectUser } from '../../redux/reducers/authSlice'
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
} from '@coreui/react'
import { useForm } from 'react-hook-form'

const ProfileMain = () => {
  const data = useSelector(selectUser)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const [validated, setValidated] = useState(false)

  const form = useForm()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = form

  const resetForm = () => {
    form.reset()
  }

  const onSubmit = (data) => {
    console.log('Data: ', data)
  }

  useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  return (
    <>
      <CForm validated={validated} onSubmit={handleSubmit(onSubmit)}>
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>{t('profile')}</strong>
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
    </>
  )
}

export default ProfileMain
