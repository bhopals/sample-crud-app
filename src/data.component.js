import React from 'react';

import {connect} from 'react-redux';
import {apiRequest} from './actions/user.action'

class DataComponent extends React.Component {
  
    componentDidMount() {
        this.props.onApiRequest();
    }

    render() {
        return ( <div></div> );
    };
}

const mapStateToProps = (state, props)=> {
    return  {
      users : state.users,
      size : state.users.length
    }
  };
  
const mapActionToProps = {
    onApiRequest : apiRequest,
}
  
export default connect(mapStateToProps, mapActionToProps)(DataComponent);