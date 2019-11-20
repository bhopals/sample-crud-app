import React from 'react';
import { Link } from 'react-router-dom';


class UserDetailsComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {email, id, name, phone, username, website} = this.props;
        return (
            <tbody><tr id={id}>
            <td><Link to={"/userdetail/"+id}>{id}</Link></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{this.props.address.street}</td>
            <td>{this.props.address.city}</td>           
            <td>{this.props.company.name}</td>
            <td><a href="#" onClick={(e) =>this.props.onDeleteUser(e, id)}>X</a></td>
            </tr></tbody> 
        );
    }
}

export default UserDetailsComponent;