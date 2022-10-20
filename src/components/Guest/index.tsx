import { useState } from 'react'
import Login from './Login';
import Register from './Register';

const Guest = () => {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className='text-center container'>
            {isLogin ? <Login /> : <Register />}
            <button
                className='mt-3 btn btn-info col-sm-3'
                onClick={() => setIsLogin(prev => !prev)}
            >{isLogin ? 'Switch to Register' : 'Switch to Login'}
            </button>
        </div>
    )
}

export default Guest;