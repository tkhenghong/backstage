import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  loadToken,
  selectIsExpired,
  selectJwt,
  selectStatus,
  selectToken,
  selectUser,
} from 'src/redux/reducers/authSlice'

const RequireAuth = (props) => {
  let location = useLocation()
  const dispatch = useDispatch()

  const status = useSelector(selectStatus)
  const user = useSelector(selectUser)
  const token = useSelector(selectToken)
  const jwt = useSelector(selectJwt)
  const jwtIsExpired = useSelector(selectIsExpired)

  if (status === 'loading') {
    return <p>Checking authentication...</p>
  }

  if (!token) {
    dispatch(loadToken())
  }

  if (!token && !jwt && jwtIsExpired) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  if (user) {
    const currentUserRole = user.role
    const pageAllowedUserRoles = Object.keys(props.allowedRoles)
    if (!pageAllowedUserRoles.includes(currentUserRole)) {
      return <Navigate to="/401" />
    }
  }

  return <Outlet />
}

export default RequireAuth
