import React, { useState } from 'react'
import './_header.scss'
import {FaBars} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdNotifications, MdApps} from  'react-icons/md'
import { useHistory } from 'react-router'

function Header({handleToggleSidebar}) {

    const [input, setInput] = useState('')

    const history = useHistory()
    const handleSubmit = ()=>{
        history.push(`/search/${input}` )
    }

    return (
        <div className = "border border-dark header">
        
        <FaBars className = 'header__menu' size = {26} onClick = {handleToggleSidebar} />
        <img
            src='https://www.rawpixel.com/image/2023799/young-man-red-tee-character-png'
            alt=''
            className='header__logo'
            />      

        <form onSubmit = {handleSubmit}>
            <input type = "text" placeholder = "search" value = {input} onChange = {e=>setInput(e.target.value)}></input> 
            <button type = "submit"></button>
            <AiOutlineSearch size = {22}/>
        </form>
        
        <div className = "header__icons">
            <MdNotifications size = {28}/>
            <MdApps size = {28} />
            <img src = 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
                    alt = "avatar"
            />
        </div>

        </div>
    )
}

export default Header
