import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  CAvatar,
  CCol,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
} from '@coreui/react'
import { cilAccountLogout, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'
import { getUserInfo, selectUser, userLogout } from 'src/redux/reducers/authSlice'
import { useTranslation } from 'react-i18next'
import { ROLE_NAMES } from 'src/constants/roles_and_permissions'

const AppHeaderDropdown = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const user = useSelector(selectUser) // Display user info

  const profile = (event) => {
    navigate('/profile/main')
  }

  const logout = (event) => {
    dispatch(userLogout()).then((response) => {
      navigate('/')
      window.location.reload()
    })
  }

  if (!user) {
    dispatch(getUserInfo())
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CRow>
          <CCol xs="auto">
            <CAvatar src={avatar8} size="md" />
          </CCol>
          <CCol className="ml-2">
            <CRow>
              <h6>{user && user.name ? user.name : t('user')}</h6>
            </CRow>
            <CRow>
              <h6>{user && user.role ? t(ROLE_NAMES[user.role]) : t('role.unknown')}</h6>
            </CRow>
          </CCol>
        </CRow>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">{t('settings')}</CDropdownHeader>
        <CDropdownItem onClick={profile}>
          <CIcon icon={cilUser} className="me-2" />
          {t('profile')}
        </CDropdownItem>
        <CDropdownItem onClick={logout}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          {t('logout')}
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
