import React from 'react'
import From from './components/form/From'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../store/authSlice'
import STATUSES from '../../globals/status/statuses'

const Login = () => {

  const { user, status } = useSelector((state) => state.auth)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = (data) => {
    dispatch(login(data))

    if (status === STATUSES.SUCCESS) {
      navigate('/')
    }
    else {
      navigate('/login')
    }

  }

  return (
    <From type='Login' user={user?.username} submit={handleLogin} />
  )
}

export default Login
