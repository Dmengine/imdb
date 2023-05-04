import React from 'react'
import Results from '@/app/components/Results'

export default async function SearchPage({params}) {

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${params.searchTerm}&page=1&include_adult=false`)

    if(!res.ok) {
        throw new Error('Something went wrong')
    }
    const data = await res.json()
    const results = data.results
  return (
    <div>
        {results && results.length === 0 && (<h1 className='text-2xl font-bold'>No results found</h1>)}
        {results && <Results results={results}/>}
    </div>
  )
}
