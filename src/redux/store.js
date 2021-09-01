import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {authReducer} from './reducers/auth.reducer'
import { homeVideosReducer, selectedVideosReducer } from './reducers/videos.reducer'
import thunk from 'redux-thunk'
import { channelDetailsReducer } from './reducers/channel.reducer'
import { commentListReducer } from './reducers/comments.reducer'


const rootReducer = combineReducers({
    auth : authReducer, 
    homeVideos : homeVideosReducer,
    selectedVideo : selectedVideosReducer,
    channelDetails : channelDetailsReducer,
    commentsList : commentListReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;