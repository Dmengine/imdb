"use client"

import React from 'react'
import { useEffect } from 'react'


export default function Error( {error, reset} ) {

    useEffect(() => {
        console.log(error)
    }, [error])

  return (
    <div>
        <h1>SOmething went wrong</h1>
        <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
