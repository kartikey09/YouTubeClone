import React, { useEffect, useState } from 'react'
import './_videoHorizontal.scss'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import { AiFillEye } from 'react-icons/ai'
import request from '../../api'
import moment from 'moment'
import numeral from 'numeral'
import { Col, Row } from 'react-bootstrap'

const VideoHorizontal = ({video}) => {

    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)

    const {id, snippet : {
        channelId,
        channelTitle,
        description,
        title,
        publishedAt,
        thumbnails : {medium},
    }} = video

    useEffect(()=>{
        const get_video_details= async() =>{
            const{data:{items}} = await request('/videos', {
                params : {
                    part : 'contentDetails,statistics',
                    id : id.videoId,
                },
            })

            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        get_video_details()
    },[id])

    useEffect(()=>{
        const get_channel_icon= async() =>{
            const{data:{items}} = await request('/channels', {
                params : {
                    part : 'snippet',
                    id : channelId,
                },
            })
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        get_channel_icon()
    },[channelId])

    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(100000).format('mm:ss')
    return (
        <Row className = 'videoHorizontal m-1 py-2 align-align-items-center'>
            <Col xs = {6} md = {4} className = 'videoHorizontal__left'>
                <LazyLoadImage src= {medium.url} 
                effect = 'blur'
                className = 'videoHorizontal__thumbnail'
                wrapperClassName = 'videoHorizontal__thumbnail-wrapper'/>
                <span className = 'video__top__duration'>{_duration}</span>
            </Col>
            
            <Col xs = {6} md = {8} className = 'videoHorizontal__right p-0'>
                <p className='mb-1 videoHorizontal__title'>{title}</p>
                <div className='videoHorizontal__details'>
                    <AiFillEye /> {numeral(views).format('0.a')} Views •
                    {moment(publishedAt).fromNow()}
                </div>
                <div className='my-1 videoHorizontal__channel d-flex align-items-center'>
                    {/* TODO: show in search screen */}
                    {/* <LazyLoadImage src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png' 
                    effect='blur' /> */}
                    <p className='mb-0'>{channelTitle}</p>
                </div>
            </Col>
        </Row>
    )
}

export default VideoHorizontal
