import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadHolidayInfo, selectHoliday } from '../../redux/reducers/holidaySlice'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { showToast } from '../../helpers'
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
import { DatePicker } from '@mui/x-date-pickers'
import TextField from '@mui/material/TextField'
import { STATUS_COLOR } from '../../constants/status'

const HolidayInfo = () => {
  const holiday = useSelector(selectHoliday)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const params = useParams()
  const toaster = useRef()
  const form = useForm()
  const [toast, addToast] = useState(0)

  const [validated, setValidated] = useState(false)
  const [holidayName, setName] = useState(undefined)
  const [states, setStates] = useState([])
  const [startDate, setStartDate] = useState(undefined)
  const [endDate, setEndDate] = useState(undefined)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = form

  if (params.id) {
    useEffect(() => {
      dispatch(loadHolidayInfo())
      if (holiday) {
        setName(holiday.holiday_name)
        setStates(holiday.states)
        setStartDate(holiday.start_date)
        setEndDate(holiday.end_date)
      }
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

  /**
   * On the event of adding a state is involved in the holiday.
   * @param state: State or Federal Territory name.
   */
  const onStateAdd = (state) => {}

  /**
   * On the event of removing a state should NOT be involved in the holiday.
   * @param state: State or Federal Territory name.
   */
  const onStateRemove = (state) => {}

  return (
    <>
      <CForm validated={validated} onSubmit={handleSubmit(onSubmit)}>
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>{t('holiday.info.title')}</strong>
              </CCardHeader>
              <CCardBody>
                <div className="mb-3">
                  <CFormLabel htmlFor="nameInput">{t('name')}</CFormLabel>
                  <CFormInput
                    type="text"
                    id="nameInput"
                    placeholder={t('name')}
                    value={holidayName}
                    onChange={(event) => {
                      setName(event.target.value)
                    }}
                  />
                </div>
                <div className="mb-3">
                  {states.map((item, index) => {
                    return (
                      <>
                        <div>{item}</div>
                      </>
                    )
                  })}
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="descriptionInput">Description</CFormLabel>
                  <CFormTextarea id="descriptionInput" rows="3"></CFormTextarea>
                </div>
                <div className="mb-3">
                  <DatePicker
                    id="start_date"
                    label="Start Date"
                    value={startDate}
                    onChange={(event) => {
                      setStartDate(event.target.value)
                    }}
                    renderInput={(inputParams) => (
                      <TextField {...inputParams} {...register('start_date')} fullWidth />
                    )}
                  />
                </div>
                <div className="mb-3">
                  <DatePicker
                    id="end_date"
                    label="End Date"
                    value={endDate}
                    onChange={(event) => {
                      setEndDate(event.target.value)
                    }}
                    renderInput={(inputParams) => (
                      <TextField {...inputParams} {...register('end_date')} fullWidth />
                    )}
                  />
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

export default HolidayInfo
