import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT} from '../actionTypes'

const initialState = {
    oAuth : sessionStorage.getItem('ytc-oauthAccessToken') ? sessionStorage.getItem('ytc-oauthAccessToken') : null,
    accessToken : sessionStorage.getItem('ytc-accessToken') ? sessionStorage.getItem('ytc-accessToken') : null,
    user : sessionStorage.getItem('ytc-user') ? JSON.parse(sessionStorage.getItem('ytc-user')) : null,
    loading : false
}

export const authReducer = (state = initialState, action)=>{
    const {type, payload} = action
    switch(type){
        case LOGIN_REQUEST:
            return{
                ...state,
                loading : true
            }

        case LOGIN_SUCCESS:
            return{
                ...state, 
                accessToken : payload.accessToken,
                oAuth : payload.oAuth,
                loading : false
            }

        case LOGIN_FAIL:
            return{
                ...state, 
                accessToken : null,
                loading : false,
                error : payload
            }

        case LOAD_PROFILE:
            return{
                ...state, 
                user : payload
            }

        case LOG_OUT:
            return{
                ...state, 
                accessToken : null,
                user : null
            }

        default:
            return state
    }
}