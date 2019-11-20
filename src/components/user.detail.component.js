import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {userFetchById, editUser, resetUserById} from '../actions/user.action'
import { Redirect } from 'react-router';

class UserDetailComponent extends React.Component {

    constructor(props){
        super(props);
        this.user = {};
        this.state = {};
        this.saveData = this.saveData.bind(this);
        this.onResetUserById = this.onResetUserById.bind(this); 
        console.log("USERL>>",this.user);
        
    }

    componentWillMount() {
        this.props.onUserFetchById(this.props.match.params.userId);

    }

    onResetUserById() {
        this.props.onResetUserById();
    }

    handleChange = (event, value) =>{ 
        this.props.user[value] = event.target.value;
        console.log(this.props.user);
    }

    
    saveData() {
       console.log(this.props.user);
       this.props.saveData(this.props.user);
       this.onResetUserById();
       this.setState({redirect: true});
    }
      

      render() {

        if (this.state.redirect) {
            return <Redirect push to="/" />;
        }
     
        if(this.props.user){
            console.log("this.props.user>><><>",this.props.user);
        }

        const isPropsFound = this.props.user ? true : false;
        return (
            <React.Fragment>
            <h4 className="left">User Details Component</h4>
            <div className="sub-pages">
            {isPropsFound ? (
              <table id="users" className="child-table">
              <thead><tr><th colSpan="2">Update User Details</th></tr></thead>
              <tbody>
              <tr><td>Id</td><td>{this.props.user.id}</td></tr>
              <tr><td>Name</td><td><input type="text" defaultValue={this.props.user.name} onChange={(e)=>this.handleChange(e, 'name')}/></td></tr>
              <tr><td>Email</td><td><input type="text" defaultValue={this.props.user.email} onChange={(e)=>this.handleChange(e, 'email')}/></td></tr>
              <tr><td>Phone</td><td><input type="text" defaultValue={this.props.user.phone} onChange={(e)=>this.handleChange(e, 'phone')}/></td></tr>
              <tr><td>Website</td><td><input type="text" defaultValue={this.props.user.website}  onChange={(e)=>this.handleChange(e, 'website')}/></td></tr>
              </tbody>
              <tbody>
                  <tr>
                      <td colSpan="4">
                        <button name="Save Changes" onClick={this.saveData}>Save Changes</button>
                      </td>
                  </tr>
              </tbody>
          </table>
            ) : (
                <Redirect push to="/" />
            )}

          </div>                
            <br/> 
            <div className="left"> <Link to="/">Go back to Home</Link></div>   
           
            <br/>
            </React.Fragment>
        );
      }
}

const mapStateToProps = (state, props) => {
    return {
        user: state.user
    }
}

const mapActionToProps = {
    onUserFetchById : userFetchById,
    saveData: editUser,
    onResetUserById:resetUserById
}





export default connect(mapStateToProps, mapActionToProps)(UserDetailComponent);