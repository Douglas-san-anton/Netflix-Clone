const { VITE_API_KEY } = import.meta.env

export const trendingEndpoint = `/trending/all/week?api_key=${VITE_API_KEY}&language=en-US`
export const netflixOriginalsEndpoint = `/discover/tv?api_key=${VITE_API_KEY}&with_networks=213`
export const TopRatedEndpoint = `/movie/top_rated?api_key=${VITE_API_KEY}&language=en-US`
export const byGenresEndpoints = (genreId) => `/discover/movie?api_key=${VITE_API_KEY}&with_genres=${genreId}`
