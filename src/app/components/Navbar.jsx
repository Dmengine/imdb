import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex justify-center box-decoration-clone dark:bg-gray-600 bg-amber-100 lg:text-lg p-4'>
        <NavbarItem title='Trending' param='FetchTrending'/>
        <NavbarItem title='Top Rated' param='FetchTopRated' />
    </div>
  )
}
