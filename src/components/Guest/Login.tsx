import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const Login = () => {

    const navigate = useNavigate();

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleClickClear = () => {
        setLogin('');
        setPassword('');
    }

    const handleClickLogin = () => {
        navigate('/profile');
    }

    return (
        <div className='row mt-5'>
            <label className='label h3'>Login
                <input
                    className='col-sm-12 mt-2'
                    type={'text'}
                    onChange={e => setLogin(e.target.value.trim())}
                    value={login}
                />
            </label>

            <label className='label h3'>Password
                <input
                    className='col-sm-12 mt-2'
                    type={'password'}
                    onChange={e => setPassword(e.target.value.trim())}
                    value={password}
                />
            </label>

            <button className='btn btn-success mt-3 offset-3 col-sm-3' onClick={handleClickLogin}>Login</button>
            <button className='btn btn-danger mt-3 col-sm-3 ms-2' onClick={handleClickClear}>Clear</button>
        </div>
    )
}

export default Login