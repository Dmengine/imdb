import React from 'react'
import { Menuitem } from './Menuitem'
import {AiFillHome} from "react-icons/ai";
import {BsInfoCircleFill} from 'react-icons/bs';
import Link from 'next/link';

export const Header = () => {
  return (
    <div>
        <div className='flex'>
            <Menuitem title='Home' address="/" Icon={AiFillHome} />
            <Menuitem title='About' address="/about" Icon={BsInfoCircleFill} />
        </div>
        <div>
            <Link href="/">
                <h2 className='text-2xl '>
                    <span>IMDb</span>
                    <span>Clone</span>
                </h2>
            </Link>
        </div>
    </div>
  )
}
