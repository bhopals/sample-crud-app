import React from 'react';
import {Link} from 'react-router-dom'

const CompanyComponent = (props) => {
    return (
      <div>
           <h2>Company Component</h2>

        <br/><br/>
    <Link to="/">Go Back to Home Page</Link>
    <br/><br/>
      </div>
  );
}


export default CompanyComponent;