import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSwitch,
  CFormTextarea,
  CRow,
  CTooltip,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import { loadBranchInfo, selectBranch } from '../../redux/reducers/branchSlice'
import { TimePicker } from '@mui/x-date-pickers'
import moment from 'moment'
import CIcon from '@coreui/icons-react'
import parse from 'html-react-parser'
import { cilInfo } from '@coreui/icons'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

const BranchInfo = () => {
  const branch = useSelector(selectBranch)
  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()
  const form = useForm()
  const { t, i18n } = useTranslation()
  const [operationStartTime, setOperationStartTime] = useState(moment())
  const [operationEndTime, setOperationEndTime] = useState(moment())
  const [lunchStartTime, setLunchStartTime] = useState(moment())
  const [lunchEndTime, setLunchEndTime] = useState(moment())
  const [serviceOptions, setServiceOptions] = useState([])
  const [validated, setValidated] = useState(false)

  if (params.id) {
    useEffect(() => {
      dispatch(loadBranchInfo(params.id))
      if (branch) {
        setOperationStartTime(moment(branch.operationStartTime, moment.ISO_8601))
        setOperationEndTime(moment(branch.operationEndTime, moment.ISO_8601))
        setLunchStartTime(moment(branch.lunchStartTime, moment.ISO_8601))
        setLunchEndTime(moment(branch.lunchEndTime, moment.ISO_8601))
        setServiceOptions(branch.serviceOptions)
      }
    }, [])
  }

  const onSubmit = (data) => {
    console.log('Data: ', data)
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = form

  const onServiceOptionsChanged = (index) => {
    console.log('onChange() index: ', index)

    const newServiceOptions = serviceOptions.map((obj, index2) => {
      if (index === index2) {
        return { ...obj, enabled: !obj.enabled }
      }

      return obj
    })
    setServiceOptions(newServiceOptions)
  }

  const resetForm = (event) => {
    console.log('form: ', form)
    form.reset()
  }

  return (
    <>
      <CForm validated={validated} onSubmit={handleSubmit(onSubmit)}>
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>{t('branch.operation.status')}</strong>
              </CCardHeader>
              <CCardBody>
                <p className="text-medium-emphasis small">{t('branch.info.description')}</p>
                <CRow>
                  <CCol lg={3} xs={12} className="mb-4">
                    <TimePicker
                      id="operation_start_time"
                      label="Operation Start"
                      value={operationStartTime}
                      onChange={(event) => {
                        setOperationStartTime(event.target.value)
                      }}
                      renderInput={(inputParams) => (
                        <TextField {...inputParams} {...register('operation_start_time')} />
                      )}
                    />
                  </CCol>
                  <CCol lg={3} xs={12} className="mb-4">
                    <TimePicker
                      id="operation_end_time"
                      label="Operation End"
                      value={operationEndTime}
                      onChange={(event) => {
                        setOperationEndTime(event.target.value)
                      }}
                      renderInput={(inputParams) => (
                        <TextField {...inputParams} {...register('operation_end_time')} />
                      )}
                    />
                  </CCol>
                  <CCol lg={3} xs={12} className="mb-4">
                    <TimePicker
                      id="lunch_start_time"
                      label="Lunch Start Time"
                      value={lunchStartTime}
                      onChange={(event) => {
                        setLunchStartTime(event.target.value)
                      }}
                      renderInput={(inputParams) => (
                        <TextField {...inputParams} {...register('lunch_start_time')} />
                      )}
                    />
                  </CCol>
                  <CCol lg={3} xs={12} className="mb-4">
                    <TimePicker
                      id="lunch_end_time"
                      label="Lunch End Time"
                      value={lunchEndTime}
                      onChange={(event) => {
                        setLunchEndTime(event.target.value)
                      }}
                      renderInput={(inputParams) => (
                        <TextField {...inputParams} {...register('lunch_end_time')} />
                      )}
                    />
                  </CCol>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <CButton color="secondary" className="me-md-2">
                      {t('cancel')}
                    </CButton>
                    <CButton color="primary">{t('update')}</CButton>
                  </div>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>{t('branch.manager.list')}</strong>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol lg={6} xs={12} className="mb-4">
                    <CFormLabel htmlFor="branch_manager_list" className="col-sm-2 col-form-label">
                      {t('header')}
                    </CFormLabel>
                    <CFormTextarea id="branch_manager_list" rows="5" readOnly></CFormTextarea>
                  </CCol>
                  <CCol lg={6} xs={12} className="mb-4">
                    <CRow className="mb-3">
                      <CFormLabel htmlFor="branch_manager_name" className="col-form-label">
                        {t('name')}
                      </CFormLabel>
                      <CFormInput type="text" id="branch_manager_name"></CFormInput>
                    </CRow>
                    <CRow className="mb-3">
                      <CFormLabel htmlFor="branch_manager_email" className="col-form-label">
                        {t('email.address')}
                      </CFormLabel>
                      <CFormInput type="text" id="branch_manager_email" />
                    </CRow>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <CButton color="primary">{t('add')}</CButton>
                    </div>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>{t('branch.service.list')}</strong>
              </CCardHeader>
              <CCardBody>
                <CAccordion>
                  {serviceOptions.map((item, index) => (
                    <CAccordionItem itemKey={index} key={index}>
                      <CAccordionHeader>
                        <CRow>
                          <CCol xs={9}>{item.name}</CCol>
                          <CCol xs={1}>
                            <CTooltip content={item.tip}>
                              <CIcon icon={cilInfo}></CIcon>
                            </CTooltip>
                          </CCol>
                          <CCol xs={1}>
                            <CBadge
                              color={item.enabled ? 'success' : 'danger'}
                              shape="rounded-pill"
                            >
                              {item.enabled ? 'Enabled' : 'Disabled'}
                            </CBadge>
                          </CCol>
                        </CRow>
                      </CAccordionHeader>
                      <CAccordionBody>
                        {parse(item.description)}
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                          {serviceOptions[index].enabled ? (
                            <CFormSwitch
                              size="xl"
                              id={'service_options_' + index}
                              label="Enable"
                              value={serviceOptions[index].enabled}
                              onChange={(_) => {
                                onServiceOptionsChanged(index)
                              }}
                              defaultChecked
                            ></CFormSwitch>
                          ) : (
                            <CFormSwitch
                              size="xl"
                              id={'service_options_' + index}
                              label="Enable"
                              value={serviceOptions[index].enabled}
                              onChange={(_) => {
                                onServiceOptionsChanged(index)
                              }}
                            ></CFormSwitch>
                          )}
                        </div>
                      </CAccordionBody>
                    </CAccordionItem>
                  ))}
                </CAccordion>
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

export default BranchInfo
