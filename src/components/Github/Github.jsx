import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  // const [data,setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/Sonuu20')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data)
  //   })
  // },[])


  return (
    <div className='text-center m-4 bg-gray-700 p-4 text-white text-3xl '>Github Repositry: {data.public_repos}
    <div className='flex items-center justify-center mt-1'>
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    <div className='mt-1 text-lg text-left sm:text-center'>Location:{data.location}</div>
    </div>
  )
}

export default Github

export const githubInfoLoader =  async () => {
  const response = await fetch('https://api.github.com/users/Sonuu20')
  return response.json()
}