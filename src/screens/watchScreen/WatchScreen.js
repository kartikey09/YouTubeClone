import React, { useEffect } from 'react'
import './watchScreen.scss'
import { Col, Row } from 'react-bootstrap'
import VideoMetaData from '../../components/VideoMetaData/VideoMetaData'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import Comments from '../../components/comments/Comments'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getVideoById } from '../../redux/actions/videos.action'


const WatchScreen = () => {
    
    const {id} = useParams()
    const dispatch = useDispatch()
    const {video, loading} = useSelector(state=>state.selectedVideo)
    useEffect(()=>{
        dispatch(getVideoById(id))
    }, [dispatch, id])

    return (
        <Row>
            <Col lg={8}>
                <div className='watchScreen__player'>
                    <iframe
                        src = {`https://www.youtube.com/embed/${id}`}
                        frameBorder='0'
                        title={video?.snippet?.title}
                        allowFullScreen
                        width='100%'
                        height='100%'
                    ></iframe>
                </div>
                {!loading ?  <VideoMetaData video = {video} videoId = {id} />  : <h6>Loading...</h6>}
                { <Comments/> }
            </Col>
            { <Col lg={4}>
                {
                    [...Array(10)].map(()=> <VideoHorizontal/>)
                }
            </Col> }
        </Row>
    )
}

export default WatchScreen
