import { useState } from 'react'

interface Props {
  close: () => void
}


const ChangePassword = ({ close }: Props) => {

  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [repeatedPassword, setRepeatedPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');


  const handleSaveCloseClick = () => {
    if (newPassword !== repeatedPassword) setMessage('Password repeat error');
    else close();
  }

  const handleClearClick = () => {
    setOldPassword('');
    setNewPassword('');
    setRepeatedPassword('');
  }

  return (
    <div className='border border-dark rounded'>
      <div className='d-flex justify-content-center align-items-center mb-2'>
        <label className='h5'>Old password:
          <input
            className='col-sm-7 mt-2 ms-2'
            type={'password'}
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value.trim())}
          />
        </label>
        <label className='h5'>New password:
          <input
            className='col-sm-7 mt-2 ms-2'
            type={'password'}
            value={newPassword}
            onChange={e => setNewPassword(e.target.value.trim())}
          />
        </label>
        <label className='h5'>Repeat new password:
          <input
            className='col-sm-5 mt-2 ms-2'
            type={'password'}
            value={repeatedPassword}
            onChange={e => setRepeatedPassword(e.target.value.trim())}
          />
        </label>
      </div>

      <button className='btn btn-success col-sm-2' onClick={handleSaveCloseClick}>Save & close</button>
      <button className='btn btn-danger col-sm-2 ms-2' onClick={close}>Close</button>
      <button className='btn btn-warning col-sm-2 ms-2' onClick={handleClearClick}>Clear</button>

      <h5>{message}</h5>
    </div>
  )
}

export default ChangePassword