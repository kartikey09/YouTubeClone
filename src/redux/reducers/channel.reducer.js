import { CHANNEL_DETAILS_FAIL, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS, SET_SUBSCRIPTION_STATUS } from "../actionTypes"

export const homeVideosReducer = (state = {
    videos : [],
    loading : false,
    nextPageToken : null,
    activeCategory : 'All',
    subscriptionStatus : false
}, action)=>{
    const {type, payload} = action
    switch(type){
        case HOME_VIDEOS_SUCCESS:
            return {
                ...state,
                videos : state.activeCategory === payload.category ? [...state.videos, ...payload.videos] : payload.videos,
                loading : false,
                nextPageToken : payload.nextPageToken,
                activeCategory : payload.category
            }

        case HOME_VIDEOS_REQUEST:
            return {
                ...state,
                loading : true,
            }

        case HOME_VIDEOS_FAIL:
            return {
                ...state,
                loading : false,
                error : payload
            }
        default : 
            return state
    }
}

export const channelDetailsReducer = (state = {loading : true, channel : {}}, action)=>{
    const {type, payload} = action
    switch(type){
        case CHANNEL_DETAILS_REQUEST:
            return{
                ...state,
                loading : true
            }

        case CHANNEL_DETAILS_SUCCESS:
            return{
                ...state,
                channel : payload,
                loading : false
            }

        case CHANNEL_DETAILS_FAIL:
            return{
                ...state,
                channel : {},
                loading : false,
                error : payload
            }

            case SET_SUBSCRIPTION_STATUS:
                return{
                    ...state,
                    subscriptionStatus : payload
                }
        default : 
            return state
    }
}