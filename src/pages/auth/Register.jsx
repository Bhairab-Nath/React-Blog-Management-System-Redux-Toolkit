import From from './components/form/From'
import { register } from '../../../store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import STATUSES from '../../globals/status/statuses'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const { status } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleRegister = (data) => {
    dispatch(register(data))

    if (status === STATUSES.SUCCESS) {
      navigate('/login')
    }
    else {
       navigate('/register')
    }

  }

  return (
    <From type='Register' submit={handleRegister} />
  )
}

export default Register
