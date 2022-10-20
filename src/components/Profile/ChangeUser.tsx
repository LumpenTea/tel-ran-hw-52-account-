import { useState } from 'react'

interface Props {
  close: () => void
}

const ChangeUser = ({ close }: Props) => {

  const [firstName, setFirtsName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [login, setLogin] = useState<string>('');

  const handleClearClick = () => {
    setFirtsName('');
    setLastName('');
    setLogin('');
  }

  return (
    <div className='border border-dark rounded'>
      <div className='d-flex justify-content-center align-items-center mb-2'>
        <label className='h5'>First Name:
          <input
            className='col-sm-7 mt-2 ms-2'
            type={'text'}
            value={firstName}
            onChange={e => setFirtsName(e.target.value)}
          />
        </label>
        <label className='h5'>Last Name:
          <input
            className='col-sm-7 mt-2 ms-2'
            type={'text'}
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </label>
        <label className='h5'>Login:
          <input
            className='col-sm-7 mt-2 ms-2'
            type={'text'}
            value={login}
            onChange={e => setLogin(e.target.value)}
          />
        </label>
      </div>

      <button className='col-sm-2 btn btn-success mb-2' onClick={close}>Save & close</button>
      <button className='col-sm-2 ms-2 btn btn-danger mb-2' onClick={close}>Close</button>
      <button className='col-sm-2 ms-2 btn btn-warning mb-2' onClick={handleClearClick}>Clear</button>

    </div>
  )
}

export default ChangeUser