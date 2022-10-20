import {useState} from 'react'

const Register = () => {
  
    const [login, setLogin] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleClickRegister = () => {
        console.log(login, password, firstName, lastName);
        
    }

    const handleClickClear = () => {
        setLogin('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }
  
    return (
    <div className='row'>
        <label className='h3'>Login
            <input 
                className='col-sm-12 mt-2'
                type={'text'}
                onChange={e => setLogin(e.target.value.trim())}
                value={login}
            />
        </label>
        <label className='h3'>Password
            <input 
                className='col-sm-12 mt-2'
                type={'password'}
                onChange={e => setPassword(e.target.value.trim())}
                value={password}
            />
        </label>
        <label className='h3'>First Name
            <input 
                className='col-sm-12 mt-2'
                type={'text'}
                onChange={e => setFirstName(e.target.value.trim())}
                value={firstName}
            />
        </label>
        <label className='h3 mb-4'>Last Name
            <input 
                className='col-sm-12 mt-2'
                type={'text'}
                onChange={e => setLastName(e.target.value.trim())}
                value={lastName}
            />
        </label>

        <button className='btn btn-success offset-3 col-sm-3' onClick={handleClickRegister}>Register</button>
        <button className='btn btn-danger col-sm-3 ms-2' onClick={handleClickClear}>Clear</button>
    </div>
  )
}

export default Register