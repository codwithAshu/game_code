import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Auth/css/enter.css'

const Enter = () => {
    const navigate = useNavigate()
    return (
        <div className='enter'>
            <div className='wrapper'>
                <div className='static'>Trust me i am a </div>
                <ul className='dynmic'>
                    <li><span> {"<developer>"} </span> </li>
                    <li> <span>{"</coder>"}</span></li>
                    <li> <span> {"<programmer>"}</span> </li>
                    <li> <span> may be a learner</span></li>
                </ul>
            </div>
            <button className='enterbtn' onClick={() => navigate("/login")}>ENTER</button>

        </div>
    )
}

export default Enter
