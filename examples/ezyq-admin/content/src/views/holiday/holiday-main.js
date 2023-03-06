import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { load, selectHolidays } from '../../redux/reducers/holidaySlice'
import { dtOptions } from '../../config/datatable'
import MUIDataTable from 'mui-datatables'
import {
  CButton,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'
import { useTranslation } from 'react-i18next'
import { state_codes_to_name } from '../../constants/state_code'
import { useNavigate } from 'react-router-dom'

const HolidayMain = () => {
  const data = useSelector(selectHolidays)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  const createHoliday = () => {
    navigate(`/holidays/info`)
  }

  const editHoliday = (holidayCode) => {
    navigate(`/holidays/info/${holidayCode}`)
  }

  const columns = [
    {
      name: 'holiday_code',
      label: t('code'),
      options: {
        filter: true,
        sort: true,
        display: false,
      },
    },
    {
      name: 'holiday_name',
      label: t('name'),
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'states',
      label: t('states'),
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => state_codes_to_name(value),
      },
    },
    {
      name: 'start_date',
      label: t('start.date'),
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'end_date',
      label: t('end.date'),
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
          const holidayCode = tableMeta.rowData[0]
          return (
            <CDropdown>
              <CDropdownToggle color="secondary" variant="ghost">
                <CIcon icon={cilOptions} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem
                  onClick={() => {
                    editHoliday(holidayCode)
                  }}
                >
                  {t('edit')}
                </CDropdownItem>
                <CDropdownItem href="#">{t('delete')}</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          )
        },
      },
    },
  ]

  const options = {
    ...dtOptions(t),
  }

  useEffect(() => {
    dispatch(load())
  }, [])

  return (
    <>
      <CRow>
        <CCol></CCol>
        <CCol md="auto" className="mb-3 col-auto">
          <CButton onClick={createHoliday}>{t('create')}</CButton>
        </CCol>
      </CRow>
      <CRow>
        <MUIDataTable title={t('holiday.title')} data={data} columns={columns} options={options} />
      </CRow>
    </>
  )
}

export default HolidayMain
