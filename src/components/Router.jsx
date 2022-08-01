import { observer } from 'mobx-react'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthStore } from '../stores/AuthStore'
import Home from './Home'
import LoginForm from './login/LoginForm'
import RegisterForm from './login/RegisterForm'

export default observer(function Router() {
    const { isAuthenticated } = AuthStore

    return (isAuthenticated ?
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
        :
        <Routes>
            <Route path='/login' element={<LoginForm />} />
            <Route path='/register' element={<RegisterForm />} />
        </Routes>
    )
})
