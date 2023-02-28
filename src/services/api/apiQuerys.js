import axios from "axios";
import { fetchDiscoverMovies } from '../api/endpoints'

const { VITE_API_KEY, VITE_API_URL } = import.meta.env

export const fetchGenres = async (cb) => {
  const { data } = await axios.get(`${VITE_API_URL}/genre/movie/list`, {
    params: {
      api_key: VITE_API_KEY
    },
  })
  cb(data)
}

export const fetchMovies = async (cb) => {
  const { data: { results },
  } = await axios.get(`${VITE_API_URL}/movie/popular`, {
    params: {
      api_key: VITE_API_KEY
    },
  })

  cb(results)
}

// type puede ser tv o movies
export const fetchDiscovers = async (cb, type, id) => {
  try {
    const { data: { results },
    } = await axios.get(VITE_API_URL + fetchDiscoverMovies(id, type), {
      params: {
        api_key: VITE_API_KEY
      },
    })

    cb((previous) => {
      return { ...previous, movies: results, isLoading: false }
    })
  } catch (error) {
    console.log(error);
  }

}
