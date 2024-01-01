import React, { useEffect, useState } from 'react'
import Data from './data'
import axios from 'axios'
import Posts from './posts'
import Pagination from './pagination'
import { Container ,Card} from 'react-bootstrap'
import Footer from './bottom'
import { useNavigate } from 'react-router-dom'


function Acce(){
const[posts,setPost]=useState([])
const[loading,setLoading]=useState(false)
const[currentPage,setCurrentPage]=useState(1)
const[postsPerPage,setPostsPerPage]=useState(5)
const navigate=useNavigate()
useEffect(()=>{
    const fetchPost=async()=>{

        axios.get('http://localhost:9000/products/products')
        .then(users=>{
            
            setPost(users.data)
                setLoading(false)})
        .catch(err=>console.log(err))

    }
    fetchPost() 
},[])

//get current posts
const indexOfLastPost=currentPage*postsPerPage;
const indexOfFirstPost=indexOfLastPost-postsPerPage;
const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost)

//Change page
const paginate=(pageNumber)=>setCurrentPage(pageNumber)


console.log(posts)
return(
    <>
    <h3>induction</h3>
   
 
  <Posts posts={currentPosts} loading={loading}/>

  <Pagination  currentPage={currentPage} postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
  <Footer/>
    </>

     ) }
export default Acce