import { CToast, CToastBody, CToastHeader } from '@coreui/react'
import moment from 'moment/moment'
import React from 'react'

/**
 * Converts query param object into string.
 * @param {*} obj : Query param object
 * @returns Converted query param string
 */
export const queryParams = (obj) => {
  return '?' + new URLSearchParams(obj).toString()
}

/**
 * Perform XHR Request to server with pagination response
 * @param {*} url :URL
 * @param {*} page: Page number
 * @param {*} sortOrder: sorting (target fields and direction(ascending or descending))
 * @returns Object
 */
export const xhrRequest = (url, page, sortOrder = {}) => {
  return new Promise((resolve, reject) => {
    // mock page data
    let fullData = this.getSrcData()
    const total = fullData.length // mock record count from server - normally this would be a number attached to the return data

    let sortField = sortOrder.name
    let sortDir = sortOrder.direction

    if (sortField) {
      fullData = fullData.sort((a, b) => {
        if (a[sortField] < b[sortField]) {
          return 1 * (sortDir === 'asc' ? -1 : 1)
        } else if (a[sortField] > b[sortField]) {
          return -1 * (sortDir === 'asc' ? -1 : 1)
        } else {
          return 0
        }
      })
    }
  })
}

/**
 * Display CoreUI Toast in the website.
 * @param t: Translation object
 * @param payload
 * @returns {JSX.Element}: Toast JSX object
 */
export const showToast = (t, payload) => {
  return (
    <CToast title={t(payload.title)}>
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill={payload.status}></rect>
        </svg>
        <strong className="me-auto">{t(payload.title)}</strong>
        <small>{moment().fromNow()}</small>
      </CToastHeader>
      <CToastBody>{t(payload.message)}</CToastBody>
    </CToast>
  )
}

export const getObjectKey = (obj, value) =>
  Object.keys(obj).filter(function (key) {
    return obj[key] === value
  })[0]
