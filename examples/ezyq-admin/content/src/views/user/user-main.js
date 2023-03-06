import React, { useEffect, useState } from 'react'
import MUIDataTable from 'mui-datatables'
import { useDispatch, useSelector } from 'react-redux'
import { load, selectUsers } from '../../redux/reducers/userSlice'
import { dtOptions } from '../../config/datatable'
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
import { useNavigate } from 'react-router-dom'

const UserMain = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const data = useSelector(selectUsers)

  const createUser = () => {
    navigate(`/users/info`)
  }

  const editUser = (userId) => {
    navigate(`/users/info/${userId}`)
  }

  const columns = [
    {
      name: 'userId',
      label: t('id'),
      options: {
        filter: true,
        sort: true,
        display: false,
      },
    },
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
      name: 'reference_no',
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
          const userId = tableMeta.rowData[0]
          return (
            <CDropdown>
              <CDropdownToggle color="secondary" variant="ghost">
                <CIcon icon={cilOptions} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem
                  onClick={() => {
                    editUser(userId)
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
          <CButton onClick={createUser}>{t('create')}</CButton>
        </CCol>
      </CRow>
      <CRow>
        <MUIDataTable title={t('users.title')} data={data} columns={columns} options={options} />
      </CRow>
    </>
  )
}

export default UserMain
