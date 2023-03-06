import React, { useEffect, useRef, useState } from 'react'
import MUIDataTable from 'mui-datatables'
import { useDispatch, useSelector } from 'react-redux'
import {
  load,
  selectAppointments,
  selectToast,
  updateToast,
} from '../../redux/reducers/appointmentSlice'
import { dtOptions } from '../../config/datatable'
import {
  CButton,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
  CToaster,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { showToast } from '../../helpers'

const AppointmentMain = () => {
  const data = useSelector(selectAppointments)
  const toastMessage = useSelector(selectToast)
  const toaster = useRef()
  const [toast, addToast] = useState(0)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()

  const createAppointment = () => {
    navigate(`/appointments/info`)
  }

  const editAppointment = (id) => {
    navigate(`/appointments/info/${id}`)
  }

  useEffect(() => {
    if (toastMessage !== undefined) {
      addToast(showToast(t, toastMessage))
      dispatch(updateToast(undefined))
    }
  }, [toastMessage])

  const columns = [
    {
      name: 'state',
      label: t('state'),
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'district',
      label: t('district'),
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'branch',
      label: t('name'),
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'branch',
      label: t('code'),
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'date',
      label: t('date'),
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'time',
      label: t('time'),
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'service',
      label: t('service.type'),
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'service',
      label: t('service.sub'),
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'service',
      label: t('id.type'),
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'service',
      label: t('contact.number'),
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'service',
      label: t('email.address'),
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'reference',
      label: t('reference.number'),
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'actions',
      label: t('actions'),
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          const id = tableMeta.rowData[0]
          return (
            <>
              <CDropdown>
                <CDropdownToggle color="secondary" variant="ghost">
                  <CIcon icon={cilOptions} />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem
                    onClick={() => {
                      editAppointment(id)
                    }}
                  >
                    {t('edit')}
                  </CDropdownItem>
                  <CDropdownItem href="#">{t('delete')}</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </>
          )
        },
      },
    },
  ]

  const options = {
    ...dtOptions(t),
    onTableChange: (action, tableState) => {},
  }

  useEffect(() => {
    dispatch(load())
  }, [])

  return (
    <>
      <CRow>
        <CCol></CCol>
        <CCol md="auto" className="mb-3 col-auto">
          <CButton onClick={createAppointment}>{t('create')}</CButton>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <MUIDataTable
            title={t('appointment.list')}
            data={data}
            columns={columns}
            options={options}
          />
        </CCol>
      </CRow>
      <CRow>
        <CCol>{<CToaster ref={toaster} push={toast} placement="bottom-end" />}</CCol>
      </CRow>
    </>
  )
}

export default AppointmentMain
