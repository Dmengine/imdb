import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Card( {result} ) {
  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
        <Link href={`/movies/${result.id}`}>
            <Image
                src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster.path
                }`}
                width={500}
                height={300}
                className='sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200'
                style={{
                    maxWidth: "100%",
                    height: "auto",
                }}
                placeholder='blur'
                blurDataURL='/spinner.svg'
                alt='image not available'
            ></Image>
           <div>
                <p className='line-clamp-2 text-md'> {result.overview} </p>
                <h2 className='truncate text-lg font-bold'>{result.title || result.name}</h2>
           </div>
        </Link>
    </div>
  )
}
