import React from 'react'
import Comment from '../comment/Comment'
import './_comments.scss'

const Comments = () => {

    const handleComment = ()=>{
        
    }

    return (
        <div className='comments'>
            <p>1234 comments</p>
            <div className='comments__form d-flex w-100 my-2'>
                <img src='https://www.rawpixel.com/image/2023799/young-man-red-tee-character-png'
                    alt='img'
                    className='rounded-circle mr-3'
                />
                <form onSubmit={handleComment} className='d-flex flex-grow-1'>
                    <input type='text'
                        className='flex-grow-1'
                        placeholder='Write a commment...'
                    />
                    <button className='border-0 p-2'>Comment</button>
                </form>
            </div>
        
            <div className= 'comments__list'>
                {
                    [...Array(15)].map(()=> <Comment/>)
                }
            </div>
        
        </div>
    )
}

export default Comments
