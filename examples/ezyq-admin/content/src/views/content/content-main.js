import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
} from '@coreui/react'
import { useTranslation } from 'react-i18next'

const ContentMain = () => {
  const [activeKey, setActiveKey] = useState(1)
  const { t, i18n } = useTranslation()

  return (
    <>
      <div className="example">
        <CNav variant="tabs">
          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={activeKey === 1}
              onClick={() => setActiveKey(1)}
            >
              New Appointment
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={activeKey === 2}
              onClick={() => setActiveKey(2)}
            >
              Manage Appointment
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent className="rounded-bottom">
          <CTabPane role="tabpanel" aria-labelledby="new_appointment_tab" visible={activeKey === 1}>
            <CForm>
              <CCard className="mb-4">
                <CCardBody>
                  <CRow className="mb-3">
                    <CFormLabel htmlFor="new_appointment_title" className="col-sm-2 col-form-label">
                      Title
                    </CFormLabel>
                    <div className="col-sm-10">
                      <CFormInput type="text" id="new_appointment_title" />
                    </div>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel
                      htmlFor="new_appointment_header"
                      className="col-sm-2 col-form-label"
                    >
                      Header
                    </CFormLabel>
                    <div className="col-sm-10">
                      <CFormTextarea id="new_appointment_header" rows="3"></CFormTextarea>
                    </div>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel
                      htmlFor="new_appointment_footer"
                      className="col-sm-2 col-form-label"
                    >
                      Footer
                    </CFormLabel>
                    <div className="col-sm-10">
                      <CFormTextarea id="new_appointment_footer" rows="3"></CFormTextarea>
                    </div>
                  </CRow>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <CButton color="secondary" className="me-md-2">
                      Clear
                    </CButton>
                    <CButton color="primary">{t('create')}</CButton>
                  </div>
                </CCardBody>
              </CCard>
            </CForm>
          </CTabPane>
          <CTabPane
            role="tabpanel"
            aria-labelledby="manage_appointment_tab"
            visible={activeKey === 2}
          >
            <CForm>
              <CCard className="mb-4">
                <CCardBody>
                  <CRow className="mb-3">
                    <CFormLabel
                      htmlFor="manage_appointment_title"
                      className="col-sm-2 col-form-label"
                    >
                      Title
                    </CFormLabel>
                    <div className="col-sm-10">
                      <CFormInput type="text" id="manage_appointment_title" />
                    </div>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel
                      htmlFor="manage_appointment_header"
                      className="col-sm-2 col-form-label"
                    >
                      Header
                    </CFormLabel>
                    <div className="col-sm-10">
                      <CFormTextarea id="manage_appointment_header" rows="3"></CFormTextarea>
                    </div>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel
                      htmlFor="manage_appointment_footer"
                      className="col-sm-2 col-form-label"
                    >
                      Footer
                    </CFormLabel>
                    <div className="col-sm-10">
                      <CFormTextarea id="manage_appointment_footer" rows="3"></CFormTextarea>
                    </div>
                  </CRow>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <CButton color="secondary" className="me-md-2">
                      Cancel
                    </CButton>
                    <CButton color="primary">Update</CButton>
                  </div>
                </CCardBody>
              </CCard>
            </CForm>
          </CTabPane>
        </CTabContent>
      </div>
    </>
  )
}

export default ContentMain
