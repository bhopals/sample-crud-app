import React, {Suspense} from 'react';
import './user.component.css';

import {deleteUser, createUser} from '../actions/user.action'
import {connect} from 'react-redux';
import axios from 'axios';

import CreateNewUserComponent from './user.new.component'
import UserDetailsComponent from './user.details.component';

class UserComponent extends React.Component {
 
  constructor(props) {
    super(props); 
    this.onDeleteUser = this.onDeleteUser.bind(this);
    this.onCreateUser = this.onCreateUser.bind(this);
  }

  onDeleteUser(e, id) {
    e.preventDefault();
    this.props.onDeleteUser(id);
  }

  onCreateUser(user) {
    user.id = this.props.size + 1;
    this.props.onCreateUser(user);
  }

  onUpdateUser(e, id) {
    e.preventDefault();
  }

  render() {
    return ( 
        <React.Fragment>
          <table id="users"><thead><tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PHONE</th>
            <th>User Name</th>
            <th>EMAIL</th>
            <th>WEBSITE</th>
            <th>ADDRESS</th>
            <th>COMPANY</th>
            <th>DELETE</th>
            </tr></thead>
            {this.props.users && this.props.users.map((user,index)=>{
              return (                              
                <UserDetailsComponent key={user.id} {...user} onDeleteUser={this.onDeleteUser}/>
              )
            })}
             </table>

            <br/>
            <hr/>
            <CreateNewUserComponent onSubmit={this.onCreateUser} />            
            </React.Fragment>


    )
  }  
}


const mapStateToProps = (state, props)=> {
  return  {
    users : state.users,
    size : state.size
  }
};

const mapActionToProps = {
  onDeleteUser : deleteUser,
  onCreateUser : createUser
}

export default connect(mapStateToProps, mapActionToProps)(UserComponent);
