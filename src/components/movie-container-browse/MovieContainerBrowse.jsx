import React from "react"

export const MovieContainerBrowse = () => {

  const [data, setData] = useState({ movies: [], isLoading: true })



  useEffect(() => {
    console.log(id)
    fetchDiscovers(setData, 'movie', id)
  }, [])

  return (
    <>
      {

      }
    </>
  )
}
