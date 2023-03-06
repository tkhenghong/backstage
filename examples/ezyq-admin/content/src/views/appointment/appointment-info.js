import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  createAppointment,
  loadAppointmentTypes,
  loadAvailableDates,
  loadAvailableTimeSlots,
  loadBranchDetails,
  loadBranches,
  loadDistricts,
  loadInfo,
  loadStates,
  selectAppointment,
  selectAvailableDates,
  selectAvailableTimeSlots,
  selectBranch,
  selectBranches,
  selectDistricts,
  selectServiceTypes,
  selectStates,
  selectToast,
  updateAppointment,
} from '../../redux/reducers/appointmentSlice'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import { STATE_NAMES } from 'src/constants/state_code'

const AppointmentInfo = () => {
  const params = useParams()
  const data = useSelector(selectAppointment)
  const serviceTypes = useSelector(selectServiceTypes)
  const states = useSelector(selectStates)
  const districts = useSelector(selectDistricts)
  const branches = useSelector(selectBranches)
  const branchInfo = useSelector(selectBranch)
  const availableDates = useSelector(selectAvailableDates)
  const availableTimeSlots = useSelector(selectAvailableTimeSlots)
  const toast = useSelector(selectToast)

  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const form = useForm()
  const [validated, setValidated] = useState(false)
  const idTypes = ['id.number', 'passport.number']

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = form

  useEffect(() => {
    dispatch(loadAppointmentTypes())
    dispatch(loadStates())
  })

  if (params.id) {
    useEffect(() => {
      dispatch(loadInfo(params.id))
      if (data) {
        // Load options data to show values successfully
        dispatch(loadDistricts(data.state))
        dispatch(loadBranches(data.district))
        dispatch(loadBranchDetails(data.branchInfo.name))
        dispatch(loadAvailableDates())
        dispatch(loadAvailableTimeSlots())

        reset({
          serviceType: data.serviceTypeId,
          state: data.state,
          district: data.district,
          branch: data.branchInfo.name,
          address: data.branchInfo.address,
          date: data.date,
          time: data.time,
          idType: data.idType,
          idNo: data.idNo,
          name: data.name,
          contactNumber: data.contactNo,
          emailAddress: data.email,
        })
      }
    }, [data])
  }

  if (branchInfo) {
    form.setValue('branch', branchInfo.name)
    form.setValue('address', branchInfo.address)
  }

  const onServiceTypeChange = (serviceType) => {}

  const onStateChange = (state) => {
    dispatch(loadDistricts(state))
  }

  const onDistrictChange = (district_no) => {
    dispatch(loadBranches(district_no))
  }

  const onBranchesChange = (branch_no) => {
    dispatch(loadBranchDetails(branch_no))
    dispatch(loadAvailableDates())
    dispatch(loadAvailableTimeSlots())
  }

  const onSubmit = (data) => {
    if (params.id) {
      dispatch(updateAppointment({ appointmentId: params.id, data }))
    } else {
      dispatch(createAppointment(data))
    }
  }

  useEffect(() => {
    if (toast && toast.status) {
      navigate(-1)
    }
  })

  const resetForm = (event) => {
    form.reset()
  }

  return (
    <>
      <CForm validated={validated} onSubmit={handleSubmit(onSubmit)}>
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>{t('appointment.info.title')}</strong>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol className="mb-4">
                    <p className="text-medium-emphasis small">{t('service.type')}</p>
                    <CFormSelect
                      {...register('serviceType')}
                      aria-label={t('service.type')}
                      onChange={(event) => {
                        onServiceTypeChange(event.target.value)
                      }}
                    >
                      <option>{t('select')}</option>
                      {serviceTypes.map((serviceType) => {
                        return (
                          <>
                            <option key={serviceType.id} value={serviceType.id}>
                              {serviceType.name}
                            </option>
                          </>
                        )
                      })}
                    </CFormSelect>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol className="mb-4">
                    <p className="text-medium-emphasis small">{t('state')}</p>
                    <CFormSelect
                      {...register('state')}
                      aria-label={t('states')}
                      onChange={(event) => {
                        onStateChange(event.target.value)
                      }}
                    >
                      <option>{t('select')}</option>
                      {states.map((state) => {
                        return (
                          <>
                            <option key={state} value={state}>
                              {STATE_NAMES[state]}
                            </option>
                          </>
                        )
                      })}
                    </CFormSelect>
                  </CCol>
                  <CCol className="mb-4">
                    <p className="text-medium-emphasis small">{t('district')}</p>
                    <CFormSelect
                      {...register('district')}
                      aria-label={t('district')}
                      onChange={(event) => {
                        onDistrictChange(event.target.value)
                      }}
                    >
                      <option>{t('select')}</option>
                      {districts.map((district) => {
                        return (
                          <>
                            <option key={district} value={district}>
                              {district}
                            </option>
                          </>
                        )
                      })}
                    </CFormSelect>
                  </CCol>
                  <CCol className="mb-4">
                    <p className="text-medium-emphasis small">{t('branches')}</p>
                    <CFormSelect
                      {...register('branch')}
                      aria-label={t('branches')}
                      onChange={(event) => {
                        onBranchesChange(event.target.value)
                      }}
                    >
                      <option>{t('select')}</option>
                      {branches.map((branch) => {
                        return (
                          <>
                            <option key={branch} value={branch}>
                              {branch}
                            </option>
                          </>
                        )
                      })}
                    </CFormSelect>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CCol>
                    <CFormLabel htmlFor="address" className="col-form-label">
                      {t('address')}
                    </CFormLabel>
                    <CFormInput
                      type="text"
                      id="address"
                      {...register('address')}
                      disabled
                    ></CFormInput>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol className="mb-4">
                    <p className="text-medium-emphasis small">{t('available.dates')}</p>
                    <CFormSelect {...register('date')} aria-label={t('available.dates')}>
                      <option>{t('select')}</option>
                      {availableDates.map((availableDate) => {
                        return (
                          <>
                            <option key={availableDate} value={availableDate}>
                              {availableDate}
                            </option>
                          </>
                        )
                      })}
                    </CFormSelect>
                  </CCol>
                  <CCol className="mb-4">
                    <p className="text-medium-emphasis small">{t('available.time.slots')}</p>
                    <CFormSelect {...register('time')} aria-label={t('available.time.slots')}>
                      <option>{t('select')}</option>
                      {availableTimeSlots.map((availableTimeSlot) => {
                        return (
                          <>
                            <option key={availableTimeSlot} value={availableTimeSlot}>
                              {availableTimeSlot}
                            </option>
                          </>
                        )
                      })}
                    </CFormSelect>
                  </CCol>
                  <CCol className="mb-4">
                    <CFormLabel htmlFor="name" className="col-form-label">
                      {t('name')}
                    </CFormLabel>
                    <CFormInput {...register('name')} type="text" id="name"></CFormInput>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol className="mb-4">
                    <p className="text-medium-emphasis small">{t('id.type')}</p>
                    <CFormSelect {...register('idType')} aria-label={t('id.type')}>
                      <option>{t('select')}</option>
                      {idTypes.map((idType) => {
                        return (
                          <>
                            <option key={idType} value={idType}>
                              {t(idType)}
                            </option>
                          </>
                        )
                      })}
                    </CFormSelect>
                  </CCol>
                  <CCol className="mb-3">
                    <CFormLabel htmlFor="idNo" className="col-form-label">
                      {t('id.number')}
                    </CFormLabel>
                    <CFormInput {...register('idNo')} type="text" id="idNo"></CFormInput>
                  </CCol>
                  <CCol className="mb-3">
                    <CFormLabel htmlFor="contactNumber" className="col-form-label">
                      {t('contact.number')}
                    </CFormLabel>
                    <CFormInput
                      {...register('contactNumber')}
                      type="text"
                      id="contactNumber"
                    ></CFormInput>
                  </CCol>
                  <CCol className="mb-3">
                    <CFormLabel htmlFor="emailAddress" className="col-form-label">
                      {t('email.address')}
                    </CFormLabel>
                    <CFormInput
                      {...register('emailAddress')}
                      type="email"
                      id="emailAddress"
                    ></CFormInput>
                  </CCol>
                </CRow>
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
    </>
  )
}

export default AppointmentInfo
