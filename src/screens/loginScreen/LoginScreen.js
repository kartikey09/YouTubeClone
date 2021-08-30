import React, { useEffect } from 'react'
import './loginScreen.scss'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {login} from "../../redux/actions/auth.action";


const LoginScreen = () => {

    const dispatch = useDispatch()
    const accessToken = useSelector(state=>state.auth.accessToken)
    const handleLogin = ()=>{
        dispatch(login())
    }
    const history = useHistory()
    useEffect(()=>{

        if(accessToken){
            history.push('/')
        }

    }, [accessToken, history])

    return (
        <div className = "login">
            <div className = "login__container">
                <img
                    src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
                    alt = "YouTube logo"
                />
                <button onClick = {handleLogin}>Login with Google</button>
                <p>This project is made using YouTube Data API</p>
            </div>
        </div>
    )
}

export default LoginScreen
