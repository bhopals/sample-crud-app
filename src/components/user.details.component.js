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
            <td><Link to="/userdetail">{id}</Link></td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{website}</td>
            <td title={JSON.stringify(this.props.address)}>
                <Link to="/address">Address</Link>
            </td>
            <td title={JSON.stringify(this.props.company)}>
                <Link to="/company">Company</Link>
            </td>
            <td><a href="#" onClick={(e) =>this.props.onDeleteUser(e, id)}>X</a></td>
            </tr></tbody> 
        );
    }
}

export default UserDetailsComponent;