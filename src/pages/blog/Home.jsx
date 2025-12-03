import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import Card from './components/cards/Card'
import { useDispatch, useSelector } from 'react-redux'
import { readBlog } from '../../../store/blogSlice'

const Home = () => {
  const dispatch = useDispatch()
  const {blogs} = useSelector((state)=> state.blog)

  useEffect(()=>{
    dispatch(readBlog())
  },[])

  return (
    <Layout>
      <div className='flex flex-wrap justify-center'>
        {blogs?.length > 0 && blogs.map((blog)=>{
          return (
            <Card blog = {blog}/>
          )

        })}
        
      </div>
    </Layout>
  )
}

export default Home
