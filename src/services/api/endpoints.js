const { VITE_API_KEY } = import.meta.env

export const fetchTrending = `/trending/all/week?api_key=${VITE_API_KEY}&language=en-US`
export const fetchNetflixOriginals = `/discover/tv?api_key=${VITE_API_KEY}&with_networks=213`
export const fetchTopRated = `/movie/top_rated?api_key=${VITE_API_KEY}&language=en-US`
export const fetchDiscoverMovies = (genreId, type) => `/discover/${type}?api_key=${VITE_API_KEY}&with_genres=${genreId}`
