import axios from 'axios'

const API_KEY = USER_API_KEY;

export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3",
    params : {
        part : 'snippet',
        type: 'video',
        maxResults: 1,
        key : API_KEY
        }
});
