import axios from "axios"

const instance = axios.create({
    baseURl: "https://imdb-api.com/en/API/"
})

export default instance;