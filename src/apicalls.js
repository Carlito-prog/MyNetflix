
const API_KEY = "k_gvvgys8q"
console.log(API_KEY)


const request = {
    topFifthyMovies:
    `https://imdb-api.com/en/API/Top250Movies/${API_KEY}`,
    topFifthyShows:
     `https://imdb-api.com/en/API/Top250TVs/${API_KEY}`,
    popularMovies:
     `https://imdb-api.com/en/API/MostPopularMovies/${API_KEY}`,
    popularShows:
     `https://imdb-api.com/en/API/MostPopularTVs/${API_KEY}`,
    justOut:
     `https://imdb-api.com/en/API/InTheaters/${API_KEY}`,
    mostWatched: 
    `https://imdb-api.com/en/API/BoxOfficeAllTime/${API_KEY}`,

}


export default request;