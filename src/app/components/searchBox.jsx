"use client"

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'




export default function SearchBox() {

  const [search, setSearch] = useState("")
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    router.push(`/search/${search}`)
  }


  return (
    <form onSubmit={handleSubmit} className='flex justify-between p-5 max-w-6xl items-center'>
      <input type='text' placeholder='search keywords...' className='w-full h-14 placeholder-gray-500 rounded-sm outline-none bg-transparent flex-1'></input>
      <button disabled={!search} type='submit' className='text-amber-600 disabled:text-gray-400'>search</button>
    </form>
  )
}
