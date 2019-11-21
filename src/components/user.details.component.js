import React from 'react';
import { Link } from 'react-router-dom';

const UserDetailsComponent = (props)=> {
    const {email, id, name, phone} = props;
    return (
        <tbody><tr id={id}>
            <td><Link to={"/userdetail/"+id}>{id}</Link></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{props.address.street}</td>
            <td>{props.address.city}</td>           
            <td>{props.company.name}</td>
            <td><a href="#" onClick={(e) =>props.onDeleteUser(e, id)}>X</a></td>
    </tr></tbody> )
}

export default UserDetailsComponent;