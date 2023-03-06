import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCalculator,
  cilCalendar,
  cilGraph,
  cilHeadphones,
  cilLan,
  cilNotes,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'dashboard.title',
    to: '/dashboard',
    icon: <CIcon icon={cilGraph} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavGroup,
    name: 'appointment.title',
    to: '/appointments',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'appointment.title',
        to: '/appointments/main',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'users.title',
    to: '/users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'users.title',
        to: '/users/main',
      },
      {
        component: CNavItem,
        name: 'users.info.title',
        to: '/users/info',
        hidden: true,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'branches',
    to: '/branches',
    icon: <CIcon icon={cilLan} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'branch.title',
        to: '/branches/main',
      },
      {
        component: CNavItem,
        name: 'branch.info.title',
        to: '/branches/info',
        hidden: true,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'holidays',
    to: '/holidays',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'holiday.title',
        to: '/holidays/main',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'service',
    to: '/services',
    icon: <CIcon icon={cilHeadphones} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'service.title',
        to: '/services/main',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'parameter',
    to: '/parameters',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'parameters.title',
        to: '/parameters/main',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'content',
    to: '/content',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'content.title',
        to: '/content/main',
      },
    ],
  },
]

export default _nav
