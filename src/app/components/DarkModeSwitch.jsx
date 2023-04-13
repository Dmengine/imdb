"use client"

import React, { useState } from 'react'
import {BsFillMoonFill} from "react-icons/bs";
import {MdLightMode} from "react-icons/md";
 import { useTheme } from 'next-themes';
 import { useEffect } from 'react';

export const DarkModeSwitch = () => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const {systemTheme, theme, setTheme} = useTheme();

  const currentTheme = theme === "systemTheme" ? systemTheme:theme;
  return (
    
    <>
      {mounted && (currentTheme === "dark" ? (
      <MdLightMode className='text-2xl hover:text-amber-500 cursor-pointer' onClick={() => setTheme("light")}/>
      ):(<BsFillMoonFill  className='text-2xl hover:text-amber-500 cursor-pointer'onClick={() => setTheme("dark")}/>))}  
    </>
  )
}
