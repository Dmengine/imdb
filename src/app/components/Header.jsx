import React from 'react'
import { Menuitem } from './Menuitem'
import {AiFillHome} from "react-icons/ai";
import {BsInfoCircleFill} from 'react-icons/bs';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
        <div className='flex'>
            <Menuitem title='Home' address="/" Icon={AiFillHome} />
            <Menuitem title='About' address="/about" Icon={BsInfoCircleFill} />
        </div>
        <div>
            <Link href="/">
                <h2 className='text-2xl '>
                    <span className='font-bold bg-amber-500 py-2 px-2 rounded-lg mr-1'>IMDb</span>
                    <span className='text-xl hidden sm:inline'>Clone</span>
                </h2>
            </Link>
        </div>
    </div>
  )
}
