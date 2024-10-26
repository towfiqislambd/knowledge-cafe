import { useEffect } from "react";
import { useState } from "react";
import Blog from "./blog";

const Blogs = ({handleBookmarks,handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            {
                blogs.map((blog,index) => <Blog key={index} blog={blog} handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime}></Blog>)
            }
        </div>
    )
}

export default Blogs;