  
import axios from 'axios'

const api = axios.create({
    baseURL: "https://fale-mais-back.herokuapp.com",
})

export default api