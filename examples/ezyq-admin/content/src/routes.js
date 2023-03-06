import React from 'react'
import { PAGE_PERMISSIONS, PAGES } from './constants/roles_and_permissions'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const AppointmentMain = React.lazy(() => import('./views/appointment/appointment-main'))
const AppointmentInfo = React.lazy(() => import('./views/appointment/appointment-info'))
const UserMain = React.lazy(() => import('./views/user/user-main'))
const UsersInfo = React.lazy(() => import('./views/user/user-info'))
const BranchMain = React.lazy(() => import('./views/branch/branch-main'))
const BranchInfo = React.lazy(() => import('./views/branch/branch-info'))
const HolidayMain = React.lazy(() => import('./views/holiday/holiday-main'))
const HolidayInfo = React.lazy(() => import('./views/holiday/holiday-info'))
const ServiceMain = React.lazy(() => import('./views/service/service-main'))
const ParameterMain = React.lazy(() => import('./views/parameter/parameter-main'))
const ContentMain = React.lazy(() => import('./views/content/content-main'))
const ProfileMain = React.lazy(() => import('./views/profile/profile-main'))

const routes = [
  { path: '/', exact: true, name: 'Home', allowed_roles: [] },
  {
    path: '/dashboard',
    name: 'dashboard.title',
    element: Dashboard,
    allowed_roles: PAGE_PERMISSIONS[PAGES.DASHBOARD],
  },
  {
    path: '/appointments/main',
    name: 'appointment.title',
    element: AppointmentMain,
    allowed_roles: PAGE_PERMISSIONS[PAGES.APPOINTMENT],
  },
  {
    path: '/appointments/info',
    name: 'appointment.info.title',
    element: AppointmentInfo,
    allowed_roles: PAGE_PERMISSIONS[PAGES.APPOINTMENT],
  },
  {
    path: '/appointments/info/:id',
    name: 'appointment.info.title',
    element: AppointmentInfo,
    allowed_roles: PAGE_PERMISSIONS[PAGES.APPOINTMENT],
  },
  {
    path: '/users/main',
    name: 'users.title',
    element: UserMain,
    allowed_roles: PAGE_PERMISSIONS[PAGES.USER],
  },
  {
    path: '/users/info',
    name: 'users.info.title',
    element: UsersInfo,
    allowed_roles: PAGE_PERMISSIONS[PAGES.USER],
  },
  {
    path: '/users/info/:id',
    name: 'users.info.title',
    element: UsersInfo,
    allowed_roles: PAGE_PERMISSIONS[PAGES.USER],
  },
  {
    path: '/holidays/main',
    name: 'holiday.title',
    element: HolidayMain,
    allowed_roles: PAGE_PERMISSIONS[PAGES.HOLIDAY],
  },
  {
    path: '/holidays/info',
    name: 'holiday.info.title',
    element: HolidayInfo,
    allowed_roles: PAGE_PERMISSIONS[PAGES.HOLIDAY],
  },
  {
    path: '/holidays/info/:id',
    name: 'holiday.info.title',
    element: HolidayInfo,
    allowed_roles: PAGE_PERMISSIONS[PAGES.HOLIDAY],
  },
  {
    path: '/branches/main',
    name: 'branch.title',
    element: BranchMain,
    allowed_roles: PAGE_PERMISSIONS[PAGES.BRANCH],
  },
  {
    path: '/branches/info/:id',
    name: 'branch.info.title',
    element: BranchInfo,
    allowed_roles: PAGE_PERMISSIONS[PAGES.BRANCH],
  },
  {
    path: '/services/main',
    name: 'service.title',
    element: ServiceMain,
    allowed_roles: PAGE_PERMISSIONS[PAGES.SERVICE],
  },
  {
    path: '/parameters/main',
    name: 'parameters.title',
    element: ParameterMain,
    allowed_roles: PAGE_PERMISSIONS[PAGES.PARAMETER],
  },
  {
    path: '/content/main',
    name: 'content.title',
    element: ContentMain,
    allowed_roles: PAGE_PERMISSIONS[PAGES.CONTENT],
  },
  {
    path: '/profile/main',
    name: 'profile',
    element: ProfileMain,
    allowed_roles: PAGE_PERMISSIONS[PAGES.PROFILE],
  },
]

export default routes
