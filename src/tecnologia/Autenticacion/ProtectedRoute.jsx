import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './Context/Auth'

export const ProtectedRoute = ({ children }) => {
    const { isAutenticated } = useAuth()
    const location = useLocation()
    if (!isAutenticated) {
        return <Navigate to='/' state={{ location }} />
    }
    return children
}
