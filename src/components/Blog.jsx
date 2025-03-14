import React from 'react'
import blog from '/blog.png'

const Blog = () => {
  return (
    <div className='flex items-center justify-center pr-20 pt-20'>
            <img className='w-[900px] flex items-center justify-center' src={blog} alt="" />
        </div>
  )
}

export default Blog