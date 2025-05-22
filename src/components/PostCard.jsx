import React from 'react'
import service from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-xl p-4 shadow-md'>
        <div className='w-full flex justify-center mb-4 overflow-hidden rounded-xl'>
          <img 
            src={service.getFileView(featuredImage)}  
            alt={title}
            className='rounded-xl object-cover h-48 w-full'
          />
        </div>
        <h2 className='text-lg font-semibold text-white text-center'>{title}</h2>
      </div>
    </Link>
  )
}


export default PostCard
