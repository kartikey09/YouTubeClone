import React, { useEffect } from 'react'
import './_videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoreText from 'react-show-more-text'
// import { useDispatch, useSelector } from 'react-redux'
// import {
//     checkSubscriptionStatus,
//     getChannelDetails,
// } from '../../redux/actions/channel.action'

const VideoMetaData = () => {
    return (
        <div className='py-2 videoMetaData'>
            <div className='videoMetaData__top'>
                <h5>Video Title</h5>
                <div className='py-1 d-flex justify-content-between align-items-center'>
                    <span>
                        {numeral(100000).format('0.a')} Views • {' '}
                        {moment('2020-06-6').fromNow()}
                    </span>
                    <div>
                        <span className='mr-3'>
                            <MdThumbUp size={22} />{'  '}
                            {numeral(10000).format('0.a')}
                        </span>
                        <span className='mr-3'>
                            <MdThumbDown size={22} />{'  '}
                            {numeral(10000).format('0.a')}
                        </span>
                    </div>
                </div>
            </div>
            
            <div className='py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <img
                        src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
                        alt=''
                        className='mr-3 rounded-circle'
                    />
                    <div className='d-flex flex-column creatorName'>
                        <span>PewDiePie</span>
                        <span>
                            {' '}
                            {numeral(100000).format('0.a')}
                            {' '}
                            Subscribers
                        </span>
                    </div>
                </div>

                <button
                    className= 'p-2 m-2 border-0 btn'>Subscribe
                </button>
            </div>
            
            <div className='videoMetaData__description'>
                <ShowMoreText
                    lines={3}
                    more='SHOW MORE'
                    less='SHOW LESS'
                    anchorClass='showMoreText'
                    expanded={false}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam nunc, varius non venenatis laoreet, sagittis nec ante. Praesent non auctor metus. Nullam gravida dictum lectus, vitae ultrices libero malesuada ac. Sed convallis arcu sed lacus feugiat facilisis. Integer porttitor porttitor condimentum. Nam iaculis bibendum aliquam. Nam nunc purus, vehicula at elementum ut, auctor sit amet arcu. Fusce feugiat in turpis vitae malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum nec bibendum sem.
Nunc eleifend risus ac lectus ultricies, vel vulputate mi sollicitudin. Proin rutrum dui in cursus vehicula. Ut auctor diam felis, eget tristique est ornare eu. Pellentesque ac posuere erat. Quisque dapibus rutrum tincidunt. Nunc sed erat congue, suscipit nibh tincidunt, rutrum lorem. In elementum laoreet neque, a feugiat elit ultrices eu. Nullam urna orci, mattis vel tincidunt et, viverra a velit. Aenean hendrerit ut leo maximus cursus. Vivamus est magna, hendrerit id commodo in, aliquam ut lectus. Nam viverra arcu vel lacus fringilla accumsan.
                </ShowMoreText>
            </div>
        </div>
    )
}

export default VideoMetaData