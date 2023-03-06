import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'
import RequireAuth from '../RequireAuth'
import { useTranslation } from 'react-i18next'

const AppContent = () => {
  const { t, i18n } = useTranslation()
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  element={<RequireAuth key={idx} allowedRoles={route.allowed_roles} />}
                >
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={t(route.name)}
                    element={<route.element />}
                  />
                </Route>
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
