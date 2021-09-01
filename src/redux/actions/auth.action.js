
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../actionTypes";
import app from '../../firebase'


export const login = ()=> async dispatch=>{
    try{
        dispatch({type : LOGIN_REQUEST})
        const auth = getAuth();
        const provider = new GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl', 'https://www.googleapis.com/auth/yt-analytics-monetary.readonly', 'https://www.googleapis.com/auth/yt-analytics.readonly')
        const res = await signInWithPopup(auth, provider)
        console.log(res)
        const oAuth = res._tokenResponse.oauthAccessToken
        const accessToken = res.user.accessToken
        const profile = {
            name : res._tokenResponse.displayName,
            photoURL : res.user.photoURL
        }
        sessionStorage.setItem('ytc-oauthAccessToken', oAuth)
        sessionStorage.setItem('ytc-accessToken', accessToken)
        sessionStorage.setItem('ytc-user', JSON.stringify(profile))


        dispatch({
            type : LOGIN_SUCCESS,
            payload : {accessToken, oAuth}
        })

        dispatch({
            type : LOAD_PROFILE,
            payload : profile
        })

    } catch(error){
        console.error(error.message)
        dispatch({
            type : LOGIN_FAIL,
            payload : error.message
        })
    } 
}

export const logout = ()=> async dispatch =>{
    const auth = getAuth()
    signOut(auth).catch(error=>{console.error(error.message)})
    dispatch({
        type : LOG_OUT
    })

    sessionStorage.removeItem('ytc-accessToken')
    sessionStorage.removeItem('ytc-user')
}