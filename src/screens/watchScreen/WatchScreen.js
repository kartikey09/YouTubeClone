import React from 'react'
import './watchScreen.scss'
import { Col, Row } from 'react-bootstrap'
import VideoMetaData from '../../components/VideoMetaData/VideoMetaData'
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal'
import Comments from '../../components/comments/Comments'
import { useParams } from 'react-router'


const WatchScreen = () => {
    
    const {id} = useParams()

    return (
        <Row>
            <Col lg={8}>
                <div className='watchScreen__player'>
                    <iframe
                        src = {`https://www.youtube.com/embed/${id}`}
                        frameBorder='0'
                        title='MY VIDEO'
                        allowFullScreen
                        width='100%'
                        height='100%'
                    ></iframe>
                </div>
                { <VideoMetaData /> }
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
