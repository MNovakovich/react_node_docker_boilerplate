import React, { useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchUsers} from '../../actions/user';

import UserItem from './UserItem';

 const UserList = ({users, error, loading, fetchUsers}) => {

    useEffect(() => {
        fetchUsers();
    },[])

    const userList = users !== null ?
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>email</th>
                </tr>
                </thead>
                <tbody>
                   { users.map(user => {
                          return <UserItem key={user.id}  user={user}/>
                    })
            
                }
                    </tbody>
            </table>
                    :

                    'no users'

    if(loading) {
         return 'Loading data ....'
    } else {
       return userList
    }
    
}

const mapStateToProps = state => ({
    users: state.user.users,
    error: state.user.error,
    loading:state.user.loading
  });
   
  
export default connect(mapStateToProps, {fetchUsers})(UserList)