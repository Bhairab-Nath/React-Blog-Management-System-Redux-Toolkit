import React from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { useDispatch } from 'react-redux'
import { createBlog } from '../../../store/blogSlice'

const AddBlog = () => {

  const dispatch = useDispatch()

  const handleAddBlog = (data)=>{
    dispatch(createBlog(data))
  }

  return (

    <Layout>
      <Form type='Create' submit={handleAddBlog}/>

    </Layout>

  )
}

export default AddBlog
