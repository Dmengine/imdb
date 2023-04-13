"use client"

import React from 'react'
import { ThemeProvider } from 'next-themes'

export const Provider = ({children}) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='dark:bg-gray-700 dark:text-gray-200 min-h-screen text-gray-700 transition-colors duration-300 select-none'>{children}</div>
    </ThemeProvider>
  )
}
