import React from 'react'
import './_videoHorizontal.scss'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import { AiFillEye } from 'react-icons/ai'
import request from '../../api'
import moment from 'moment'
import numeral from 'numeral'
import { Col, Row } from 'react-bootstrap'

const VideoHorizontal = () => {
    const seconds = moment.duration('100').asSeconds()
    const _duration = moment.utc(100000).format('mm:ss')
    return (
        <Row className = 'videoHorizontal m-1 py-2 align-align-items-center'>
            <Col xs = {6} md = {4} className = 'videoHorizontal__left'>
                <LazyLoadImage src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png' 
                effect = 'blur'
                className = 'videoHorizontal__thumbnail'
                wrapperClassName = 'videoHorizontal__thumbnail-wrapper'/>
                <span className = 'video__top__duration'>{_duration}</span>
            </Col>
            
            <Col xs = {6} md = {8} className = 'videoHorizontal__right p-0'>
                <p className='mb-1 videoHorizontal__title'>Be a MERN dev in 1 month</p>
                <div className='videoHorizontal__details'>
                    <AiFillEye /> {numeral(1000).format('0.a')} Views •
                    {moment('2020-05-9').fromNow()}
                </div>
                <div className='my-1 videoHorizontal__channel d-flex align-items-center'>
                    <LazyLoadImage src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png' 
                    effect='blur' />
                    <p className='mb-0'>YT-Clone Maker</p>
                </div>
            </Col>
        </Row>
    )
}

export default VideoHorizontal
