import React from 'react'
import rec from '../data/Blog'
import { RecWrapper, RecBox, RecDes } from '../styles/recStyle.js'
import Layout from '../components/layout'

const Blog = () => (
  <Layout>
  <RecWrapper>
    <h1>Blog</h1>
    <span style={{color: "white"}}>On construction...</span>
  </RecWrapper>
  </Layout>
)

export default Blog
