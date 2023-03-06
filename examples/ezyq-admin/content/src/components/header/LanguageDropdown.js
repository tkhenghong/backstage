import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  CCol,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
} from '@coreui/react'
import { cilGlobeAlt } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { getUserInfo, selectUser, selectAuthenticated } from 'src/redux/reducers/authSlice'
import { loadLanguage, updateLanguage, selectLanguage } from 'src/redux/reducers/languageSlice'
import { useTranslation } from 'react-i18next'

const LanguageDropdown = () => {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  const user = useSelector(selectUser)
  const authenticated = useSelector(selectAuthenticated)
  const language = useSelector(selectLanguage)

  if (!language) {
    dispatch(loadLanguage())
  }

  const changeLanguage = (language) => {
    i18n.changeLanguage(language).then(res => {
      dispatch(updateLanguage({ language }))
    })
  }

  if (authenticated && !user) {
    dispatch(getUserInfo())
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CRow>
          <CCol xs="auto">
            <CIcon icon={cilGlobeAlt} size="lg" />
          </CCol>
        </CRow>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">{t('languages')}</CDropdownHeader>
        <CDropdownItem onClick={() => changeLanguage('en')}>English</CDropdownItem>
        <CDropdownItem onClick={() => changeLanguage('ms')}>Bahasa Malaysia</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default LanguageDropdown
