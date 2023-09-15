import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from 'prop-types'

const Blogs = ({handleAddBookmark,handleMarkAsRead}) => {
    const[blogs,setBlogs]=useState([]);


useEffect(()=>{
fetch('blogs.json')
.then(res =>res.json())
.then(data => setBlogs(data))
},[])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl  ">blogs {blogs.length}</h1>
           {
             blogs.map(blog =><Blog blog={blog} key={blog.id}  handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead} ></Blog>)
            
           }
        </div>
    );
 
};
export default Blogs;