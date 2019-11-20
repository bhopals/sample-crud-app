import React from 'react';
import {Link} from 'react-router-dom';

class UserDetailComponent extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <React.Fragment>
            
            <div class="sub-pages">
            User Details Component

            </div>
                
                <br/>    
                <Link to="/">Go back to Home</Link>
                <br/>

            </React.Fragment>
        );
    }
}

export default UserDetailComponent;