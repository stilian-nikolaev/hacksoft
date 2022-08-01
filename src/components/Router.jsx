import { observer } from 'mobx-react'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routerEndpoints } from '../service/routerEndpoints'

import { AuthStore } from '../stores/AuthStore'
import NotFoundPage from './common/NotFoundPage'
import Home from './Home'
import LoginForm from './login/LoginForm'
import RegisterForm from './login/RegisterForm'

export default observer(function Router() {
    const { isAuthenticated } = AuthStore

    return (isAuthenticated ?
        <Routes>
            <Route path={routerEndpoints.home} element={<Home />} />
            <Route path='/*' element={<NotFoundPage />} />
        </Routes>
        :
        <Routes>
            <Route path='/' element={<Navigate replace to='/login' />} />
            <Route path={routerEndpoints.login} element={<LoginForm />} />
            <Route path={routerEndpoints.register} element={<RegisterForm />} />
        </Routes>
    )
})
