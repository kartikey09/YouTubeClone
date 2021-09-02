import axios from 'axios'

const request = axios.create({
    baseURL : 'https://youtube.googleapis.com/youtube/v3/',
    params : {
        key : 'AIzaSyCJ6pXugBolKTpHYQyTrc1eG439rZ-IrLc',
    },

})

export default request

//   firebase acc -> REACT_APP_YT_API_KEY = "AIzaSyCk6ZxG_CUEW4I_kbNSG8JQdh_6iw610zo"
//   google acc -> REACT_APP_YT_API_KEY = "AIzaSyCJ6pXugBolKTpHYQyTrc1eG439rZ-IrLc"