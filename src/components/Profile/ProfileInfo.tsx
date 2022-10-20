import '../../App.css'

const ProfileInfo = () => {
    const user = {
        "login": "user-john",
        "firstName": "John",
        "lastName": "Smith",
        "roles": [
            "User",
            "Admin"
        ]
    }

    return (
        <div className='row'>
            <h2>Login: {user.login}</h2>
            <h2 className='mb-3'>Name: {`${user.firstName} ${user.lastName}`}</h2>
            <h2 className='border-top border-bottom border-dark'>Roles</h2>
            <ul className='border border-dark rounded bg-info mb-5'>
                {user.roles.map((r: string) => <li className='h4'>{r}</li>)}
            </ul>
        </div>
    )
}

export default ProfileInfo