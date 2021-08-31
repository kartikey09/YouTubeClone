import React from 'react'
import moment from 'moment'
import './_comment.scss'

const Comment = () => {
    return (
        <div className = 'comment p-2 d-flex'>
            <img src='https://www.rawpixel.com/image/2023799/young-man-red-tee-character-png'
                    alt='img'
                    className='rounded-circle mr-3'
            />
            <div className = 'comment__body'>
                <p className = 'comment__header mb-1'>
                    Kartikey Rana • {moment('2020-08-7').fromNow()}
                </p>
                <p className = 'mb-0'>Nice Video Dude</p>
            </div>
        </div>
    )
}

export default Comment
