import { useState } from 'react';
import { changePassword, changeUser } from '../../utils/constants';
import ChangePassword from './ChangePassword';
import ChangeUser from './ChangeUser';

const UpdateUser = () => {

  const [updateAction, setUpdateAction] = useState<'changeUser' | 'changePassword' | ''>('');

  switch (updateAction) {
    case changeUser: return <ChangeUser close={() => setUpdateAction('')} />;
    case changePassword: return <ChangePassword close={() => setUpdateAction('')} />;
    default: return (
      <div>
        <button className='btn btn-warning col-sm-3 mb-2' onClick={() => setUpdateAction('changePassword')}>Change Password</button>
        <button className='btn btn-warning col-sm-3 ms-2 mb-2' onClick={() => setUpdateAction('changeUser')}>Change User Info</button>
      </div>
    )
  }
}

export default UpdateUser