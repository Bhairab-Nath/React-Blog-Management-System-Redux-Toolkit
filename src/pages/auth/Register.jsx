import From from './components/form/From'
import { register } from '../../../store/authSlice'
import { useDispatch } from 'react-redux'

const Register = () => {
  const dispatch = useDispatch()
  const handleRegister = (data) => {
    dispatch(register(data))

  }

  return (
    <From type='Register' submit={handleRegister} />
  )
}

export default Register
