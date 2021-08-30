
import {HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS} from '../actionTypes'
import request from '../../api'
export const getPopularVideos = ()=>async (dispatch)=>{
    try{
        dispatch({
            type : HOME_VIDEOS_REQUEST
        })
        const {data} = await request.get("/videos",{
            params:{
                part : 'snippet,contentDetails,statistics',
                chart : 'mostPopular',
                regioinCode : 'IN',
                maxResults  : 20,
                pageToken : ''
            }
        }) 

        dispatch({
            type : HOME_VIDEOS_SUCCESS,
            payload : {
                videos : data.items,
                nextPageToken : data.nextPageToken,
                category : 'All', 
            }
        })

    } catch(err){
        console.log(err.message)
        dispatch({
            type : HOME_VIDEOS_FAIL
        })
    }
}


export const getVideosByCategory = (keyword)=>async (dispatch, getState)=>{
    try{
        dispatch({
            type : HOME_VIDEOS_REQUEST
        })
        const {data} = await request.get("/search",{
            params:{
                part : 'snippet',
                maxResults  : 20,
                pageToken : getState().homeVideos.nextPageToken,
                q : keyword,
                type : 'video'
            }
        }) 
        dispatch({
            type : HOME_VIDEOS_SUCCESS,
            payload : {
                videos : data.items,
                nextPageToken : data.nextPageToken, 
                category : keyword
            }
        })

    } catch(err){
        console.log(err.message)
        dispatch({
            type : HOME_VIDEOS_FAIL
        })
    }
}