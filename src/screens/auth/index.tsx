import React, { useState } from 'react'

// Screens
import LoginScreen from './login/login'
import RegisterScreen from './register/register'

export const AuthScreen = () => {

    const [isLogin, setIsLogin] = useState(false)

    return (
        isLogin ? <LoginScreen setMode={setIsLogin}/> : <RegisterScreen setMode={setIsLogin}/>
    )

}