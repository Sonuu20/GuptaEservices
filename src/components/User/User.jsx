import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='bg-gray-600 text-3xl p-3 m-2'>User: {userId}</div>
  )
}

export default User