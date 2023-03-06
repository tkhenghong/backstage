import React, { useEffect, useState } from 'react'
import MUIDataTable from 'mui-datatables'
import { useDispatch, useSelector } from 'react-redux'
import { load, selectBranches } from '../../redux/reducers/branchSlice'
import { dtOptions } from '../../config/datatable'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTooltip,
} from '@coreui/react'
import { cilCheckAlt, cilOptions, cilX } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const BranchInfo = () => {
  const data = useSelector(selectBranches)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const [acceptBranchModalVisible, setAcceptBranchModalVisible] = useState(false)
  const [rejectBranchModalVisible, setRejectBranchModalVisible] = useState(false)
  const [selectedBranchNo, setSelectedBranchNo] = useState(undefined)

  const goToBranchInfo = (branchNo) => {
    setSelectedBranchNo(branchNo)
    navigate(`/branches/info/${branchNo}`)
  }

  const closeModal = () => {
    setAcceptBranchModalVisible(false)
    setRejectBranchModalVisible(false)
    setSelectedBranchNo(undefined)
  }

  const onClose = () => {
    closeModal()
  }

  const onAction = () => {
    closeModal()
  }

  const onCancel = () => {
    closeModal()
  }

  const acceptBranchRequest = (branchId) => {
    setAcceptBranchModalVisible(true)
    setSelectedBranchNo(branchId)
  }

  const rejectBranchRequest = (branchId) => {
    setRejectBranchModalVisible(true)
    setSelectedBranchNo(branchId)
  }

  const showAcceptBranchModal = () => {
    return (
      <>
        <CModal alignment="center" visible={acceptBranchModalVisible}>
          <CModalHeader>
            <CModalTitle>Accept branch</CModalTitle>
          </CModalHeader>
          <CModalBody>Are you sure to accept this branch?: {selectedBranchNo}</CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={onCancel}>
              Cancel
            </CButton>
            <CButton color="primary" onClick={onAction}>
              Accept
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    )
  }

  const showRejectBranchModal = () => {
    return (
      <>
        <CModal alignment="center" visible={rejectBranchModalVisible}>
          <CModalHeader>
            <CModalTitle>Reject branch</CModalTitle>
          </CModalHeader>
          <CModalBody>Are you sure to reject this branch?: {selectedBranchNo}</CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={onCancel}>
              Cancel
            </CButton>
            <CButton color="primary" onClick={onAction}>
              Accept
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    )
  }

  const columns = [
    {
      name: 'branch_code',
      label: t('code'),
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'state',
      label: t('state'),
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'district',
      label: t('district'),
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'branch',
      label: t('branch'),
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'address',
      label: t('address'),
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
          const branchNo = tableMeta.rowData[0]
          return (
            <>
              <CRow>
                <CCol>
                  <CTooltip content="Accept" placement="top">
                    <CButton
                      color="success"
                      shape="rounded-pill"
                      variant="outline"
                      onClick={() => acceptBranchRequest(branchNo)}
                    >
                      <CIcon icon={cilCheckAlt} size="lg" />
                    </CButton>
                  </CTooltip>
                  &nbsp;&nbsp;
                  <CTooltip content="Accept" placement="top">
                    <CButton
                      color="danger"
                      shape="rounded-pill"
                      variant="outline"
                      onClick={() => rejectBranchRequest(branchNo)}
                    >
                      <CIcon icon={cilX} size="lg" />
                    </CButton>
                  </CTooltip>
                </CCol>
                <CCol>
                  <CDropdown>
                    <CDropdownToggle color="secondary" variant="ghost">
                      <CIcon icon={cilOptions} />
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem onClick={() => goToBranchInfo(branchNo)}>
                        {t('edit')}
                      </CDropdownItem>
                      <CDropdownItem href="#">{t('delete')}</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
              </CRow>
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
      {showAcceptBranchModal()}
      {showRejectBranchModal()}
      <MUIDataTable title={'Branch Management'} data={data} columns={columns} options={options} />
    </>
  )
}

export default BranchInfo
