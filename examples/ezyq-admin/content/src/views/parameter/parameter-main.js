import React, { useEffect, useRef, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CToaster,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { load, selectParameters } from '../../redux/reducers/parameterSlice'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { showToast } from '../../helpers'
import { STATUS_COLOR } from '../../constants/status'

const ParameterMain = () => {
  const data = useSelector(selectParameters)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const toaster = useRef()
  const form = useForm()
  const [toast, addToast] = useState(0)
  const [validated, setValidated] = useState(false)
  const [parameters, setParameters] = useState([])

  useEffect(() => {
    dispatch(load())
    if (data) {
      setParameters(data)
    }
  }, [data])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = form

  const onSubmit = (data) => {
    setValidated(true)

    addToast(
      showToast(t, { title: 'updated', message: 'updated', status: STATUS_COLOR.SUCCESSFUL }),
    )
  }

  return (
    <>
      <CRow>
        <CForm validated={validated} onSubmit={handleSubmit(onSubmit)}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>{t('parameters.settings')}</strong>
            </CCardHeader>
            <CCardBody>
              {parameters.map((parameter, index) => {
                return (
                  <>
                    <CRow className="mb-3" key={parameter.parameter_id}>
                      <CFormLabel
                        htmlFor={parameter.parameter_id}
                        className="col-sm-2 col-form-label"
                      >
                        {parameter.parameter_name}
                      </CFormLabel>
                      <div className="col-sm-10">
                        <CFormInput
                          type="text"
                          id={parameter.parameter_id}
                          {...register(parameter.parameter_id)}
                          value={parameter.parameter_value}
                          onChange={(event) => {
                            const newValue = event.target.value
                            setParameters(
                              parameters.map((value, index) =>
                                value.parameter_id === parameter.parameter_id
                                  ? { ...value, parameter_value: newValue }
                                  : { ...value },
                              ),
                            )
                          }}
                        />
                      </div>
                    </CRow>
                  </>
                )
              })}
              .
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton color="primary" type="submit">
                  {t('update')}
                </CButton>
              </div>
            </CCardBody>
          </CCard>
        </CForm>
      </CRow>
      <CToaster ref={toaster} push={toast} placement="bottom-end" />
    </>
  )
}

export default ParameterMain
