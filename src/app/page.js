import Results from "./components/Results";

const API_Key = process.env.API_Key;

export default async function Home({searchParams}) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(`https://api.themoviedb.org/3/${genre === "topRated" ? "movie/top_rated" : "trending/all/week" }?api_key${API_Key}&language=en-US&page=1`, { next: { revalidate: 10000 } })

  if(!res.ok) {
    throw new Error('failed to fetch data')
  }

  const data = await res.json();
  const results = data.results;
  //console.log(results)

  return (
    <div>
      <Results results={results}/>
    </div>
  )
}
