import { observer } from 'mobx-react'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routerEndpoints } from '../service/routerEndpoints'

import { AuthStore } from '../stores/AuthStore'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

export default observer(function Router() {
    const { isAuthenticated } = AuthStore

    return (isAuthenticated ?
        <Routes>
            <Route path={routerEndpoints.home} element={<HomePage />} />
            <Route path='/*' element={<NotFoundPage />} />
        </Routes>
        :
        <Routes>
            <Route path='/' element={<Navigate replace to='/login' />} />
            <Route path={routerEndpoints.login} element={<LoginPage />} />
            <Route path={routerEndpoints.register} element={<RegisterPage />} />
        </Routes>
    )
})
