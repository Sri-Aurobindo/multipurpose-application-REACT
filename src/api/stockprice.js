import axios from 'axios'

const API_KEY = "04NR6NJ9A5WGNWOC"

export default axios.create({
    baseURL : "https://www.alphavantage.co/",
    params : {
        function : 'TIME_SERIES_DAILY',
        apikey : API_KEY
        }
});