import React from 'react'
import './_sidebar.scss'
import { MdSubscriptions, MdExitToApp, MdThumbUp, MdHistory, MdLibraryBooks, MdHome, MdSentimentDissatisfied } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/auth.action'


function Sidebar({sidebar, handleToggleSidebar}) {
    
    const dispatch = useDispatch()
    const handleLogOut = ()=>{
        dispatch(logout() )
    }

    return (
        <nav
            className={sidebar? "sidebar open" : 'sidebar'}
            onClick = {handleToggleSidebar}>
            <li>
                <MdHome size={23} />
                <span>Home</span>
            </li>
            <li>
                <MdSubscriptions size={23} />
                <span>Subscriptions</span>
            </li>

            <li>
                <MdThumbUp size={23} />
                <span>Liked Video</span>
            </li>

            <li>
                <MdHistory size={23} />
                <span>History</span>
            </li>

            <li>
                <MdLibraryBooks size={23} />
                <span>Library</span>
            </li>

            <li>
                <MdSentimentDissatisfied size={23} />
                <span>I don't Know</span>
            </li>
            <hr />
            <li>
                <MdExitToApp size={23} onClick = {handleLogOut} />
                <span>Log Out</span>
            </li>
            <hr />
        </nav>
    )
}


export default Sidebar
