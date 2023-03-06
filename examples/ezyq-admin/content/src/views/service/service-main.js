import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { load, selectServices } from '../../redux/reducers/serviceSlice'
import { dtOptions } from '../../config/datatable'
import MUIDataTable from 'mui-datatables'
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilOptions } from '@coreui/icons'
import { useTranslation } from 'react-i18next'

const ServiceMain = () => {
  const data = useSelector(selectServices)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  const columns = [
    {
      name: '_id',
      label: t('id'),
      options: {
        filter: true,
        sort: true,
        display: false,
      },
    },
    {
      name: 'service_name',
      label: t('name'),
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'tooltips',
      label: t('tooltips'),
      options: {
        filter: false,
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
          return (
            <CDropdown>
              <CDropdownToggle color="secondary" variant="ghost">
                <CIcon icon={cilOptions} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">{t('edit')}</CDropdownItem>
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
      <MUIDataTable title={t('service.title')} data={data} columns={columns} options={options} />
    </>
  )
}

export default ServiceMain
