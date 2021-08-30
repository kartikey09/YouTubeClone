import axios from 'axios'

const request = axios.create({
    baseURL : 'https://youtube.googleapis.com/youtube/v3/',
    params : {
        key : 'AIzaSyCk6ZxG_CUEW4I_kbNSG8JQdh_6iw610zo',
    },

})

export default request