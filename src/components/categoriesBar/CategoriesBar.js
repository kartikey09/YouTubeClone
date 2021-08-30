import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getVideosByCategory } from '../../redux/actions/videos.action';
import './_categoriesBar.scss'
const keywords = ["All", "React js", "Redux", "Firebase", "Express js", "Mongo DB", "REST API", "HTML", "CSS", "Javascript", "Data Structures", "BootStrap "]
function CategoriesBar() {
    
    const [activeElement, setActiveElement] = useState('all');
    const dispatch = useDispatch()
    const handleClick = (value)=>{
        setActiveElement(value)
        dispatch(getVideosByCategory(value))
    }

    return (
        <div  className = "categoriesBar">
            {
                keywords.map((val, i)=>(
                    <span 
                    onClick = {()=>{handleClick(val)}}
                    className = {activeElement === val ? 'active' : ""} 
                    key = {i}>{val}</span>
                ))
            }
        </div>
    )
}

export default CategoriesBar
