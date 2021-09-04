import React, { useState } from 'react'
import './_header.scss'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header({ handleToggleSidebar }) {

    const [input, setInput] = useState('')
    const imgURL = useSelector(state => state.auth.user.photoURL);
    const history = useHistory()
    const handleSubmit = () => {
        history.push(`/search/${input}`)
    }

    return (
        <div className="border border-dark header">

            <FaBars className='header__menu' size={26} onClick={handleToggleSidebar} />
            <Link to='/'>
                <img
                    src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
                    alt=''
                    className='header__logo'
                />
            </Link>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="search" value={input} onChange={e => setInput(e.target.value)}></input>
                <button type="submit"></button>
                <button type='submit'><AiOutlineSearch size={22} className='header__search' /></button>
            </form>

            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src= {imgURL}
                    alt="avatar"
                />
            </div>

        </div>
    )
}

export default Header
