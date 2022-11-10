const tmdbBaseUrl = "https://api.themoviedb.org/3"
const jikanBaseUrl = "https://api.jikan.moe/v4"
const youtubeBaseUrl = "https://www.googleapis.com/youtube/v3"

const tmdbApiKey = "6e8cbf85f12cb9c69e8d2f39e1331936"
const youtubeApiKey = "AIzaSyAZ2iiQhEZsYeboZyUbNiBuz4Ul2faVHCQ"



const requests = {
    // randomSeries: `${tmdbBaseUrl}/tv/${randomId}?api_key=${tmdbApiKey}`,
    topRatedMovies: `${tmdbBaseUrl}/movie/top_rated?api_key=${tmdbApiKey}&language=en-US&page=1`,
    topRatedSeries: `${tmdbBaseUrl}/tv/top_rated?api_key=${tmdbApiKey}&language=en-US&page=1`,
    randomSeries: `${tmdbBaseUrl}/discover/movie?api_key=${tmdbApiKey}`,
    moviesByPopularity: `${tmdbBaseUrl}/movie/popular?api_key${tmdbApiKey}&include_adult=false&language=en-US&page=1&with_original_language=en-US&include_backdrop_path=null`,
    seriesByPopularity: `${tmdbBaseUrl}/tv/popular?api_key=${tmdbApiKey}&include_adult=false&language=en-US&page=1&without_genres=35`,
    amazonSeriesByNetwork: `${tmdbBaseUrl}/tv/popular?api_key=${tmdbApiKey}&include_adult=false&language=en-US&page=1&with_networks=1024`,
    netflixSeriesByNetwork: `${tmdbBaseUrl}/tv/popular?api_key=${tmdbApiKey}&include_adult=false&language=en-US&page=1&with_networks=213`,
    hotstarSeriesByNetwork: `${tmdbBaseUrl}/tv/popular?api_key=${tmdbApiKey}&include_adult=false&language=en-US&page=1&with_networks=3919`,
    animeByPopularity: `${jikanBaseUrl}/top/anime`,
    youtubeTrendingVideos: `${youtubeBaseUrl}/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=20&key=${youtubeApiKey}`
}

export default requests