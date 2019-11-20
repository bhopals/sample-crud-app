import React from 'react';


class CreateNewUserComponent extends React.Component {

    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.phone = React.createRef();
        this.userName = React.createRef();
        this.email = React.createRef();
        this.website = React.createRef();
        this.address = React.createRef();
        this.company = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit() {
        let user = {
            name: this.name.current.value,
            phone: this.phone.current.value,
            userName: this.userName.current.value,
            email: this.email.current.value,
            website: this.website.current.value,
            address: this.address.current.value,
            company: this.company.current.value,

        }
        this.props.onSubmit(user);
    }

    render() {
        return (
            <div className="create-new"> 
              <table id="users"><tbody>
              <tr>
              <td>NAME</td>
              <td>PHONE</td>
              <td>user name</td>
              <td>EMAIL</td>
              <td>WEBSITE</td>
              <td>ADDRESS</td>
              <td>COMPANY</td>
              </tr>
              </tbody>
              <tbody>
              <tr>
              <td><input type="text" defaultValue="" ref={this.name}/></td>
              <td><input type="text" defaultValue="" ref={this.phone}/></td>
              <td><input type="text" defaultValue="" ref={this.userName}/></td>
              <td><input type="text" defaultValue="" ref={this.email}/></td>
              <td><input type="text" defaultValue="" ref={this.website}/></td>
              <td><input type="text" defaultValue="" ref={this.address}/></td>
              <td><input type="text" defaultValue="" ref={this.company}/></td>
              </tr>
              </tbody>
              </table>
              <div className="left">
              <button onClick={this.handleSubmit} name="Create New/ Update User">Create New User</button>
              </div>
            </div>
        );
    }
}

export default CreateNewUserComponent;