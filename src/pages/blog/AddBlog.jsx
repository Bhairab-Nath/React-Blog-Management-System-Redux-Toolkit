import React from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { createBlog } from '../../../store/blogSlice'
import STATUSES from '../../globals/status/statuses'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
  const {status} = useSelector((state)=>state.blog)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleAddBlog = (data)=>{
    dispatch(createBlog(data))
    
    if(status === STATUSES.SUCCESS){
      navigate('/')
    }
    else{
      navigate('/blog/add')
    }
  }

  return (

    <Layout>
      <Form type='Create' submit={handleAddBlog}/>

    </Layout>

  )
}

export default AddBlog
