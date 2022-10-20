import React from 'react'
import {useNavigate} from 'react-router-dom'
import ProfileInfo from './ProfileInfo'
import UpdateUser from './UpdateUser';

const Profile = () => {
    
    const navigate = useNavigate();
    
    const handleClickLogOut = () => {
        navigate('/login') 
    }
    
    return (
    <div>
        <ProfileInfo />
        <UpdateUser />
        <button className='btn btn-danger mt-2' onClick={handleClickLogOut}>Log out</button>
    </div>
  )
}

export default Profile