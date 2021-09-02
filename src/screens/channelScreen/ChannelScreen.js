import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getVideosByChannel } from '../../redux/actions/videos.action'

const ChannelScreen = () => {
    
    const channelId = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getVideosByChannel(channelId))
    }, [dispatch])

    return (
        <div>
            
        </div>
    )
}

export default ChannelScreen
