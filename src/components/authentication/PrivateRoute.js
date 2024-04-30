import React, { Fragment } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

export default function PrivateRoute() {
  const { currentUser } = useAuth()

  return (
    <Fragment>{currentUser ? <Outlet /> : <Navigate to="/login" />}</Fragment>
  )
}
