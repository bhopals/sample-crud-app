import React from 'react';


class CreateNewUserComponent extends React.Component {

    

    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.phone = React.createRef();
        this.email = React.createRef();
        this.companyName = React.createRef();
        this.addressStreet = React.createRef();
        this.addressCity = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit() {
        
        if(EMPTY !== this.name.current.value &&
            EMPTY !== this.phone.current.value &&
            EMPTY !== this.name.current.value &&
            EMPTY !== this.email.current.value &&
            EMPTY !== this.addressStreet.current.value &&
            EMPTY !== this.addressCity.current.value &&
            EMPTY !== this.companyName.current.value 
        ) {
            let user = {
                name: this.name.current.value,
                phone: this.phone.current.value,
                email: this.email.current.value,
                address : {street: this.addressStreet.current.value,
                    city: this.addressCity.current.value
                },
                company: {name:this.companyName.current.value},
    
            }
            this.props.onSubmit(user);
            this.refValueReset();
        }
        
    }

    refValueReset() {
        this.name.current.value = "";
        this.phone.current.value = "";
        this.email.current.value = "";
        this.addressCity.current.value = "";
        this.addressStreet.current.value = "";
        this.companyName.current.value = "";
    }

    render() {
        return (
            <div className="create-new"> 
              <table id="users"><tbody>
              <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Street</td>
              <td>City</td>
              <td>Company Name</td>
              </tr>
              </tbody>
              <tbody>
              <tr>
              <td><input type="text" defaultValue="" ref={this.name}/></td>
              <td><input type="text" defaultValue="" ref={this.email}/></td>
              <td><input type="text" defaultValue="" ref={this.phone}/></td>
              <td><input type="text" defaultValue="" ref={this.addressStreet}/></td>
              <td><input type="text" defaultValue="" ref={this.addressCity}/></td>
              <td><input type="text" defaultValue="" ref={this.companyName}/></td>
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

const EMPTY = "";


export default CreateNewUserComponent;