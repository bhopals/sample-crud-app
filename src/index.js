import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom';


import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';

import {Provider} from 'react-redux';
import userReducer from './reducers/user.reducers';
import CompanyComponent from './components/company.component';
import DataComponent from './data.component'
import {apiRequest} from './actions/user.action'
import AddressComponent from './components/address.component';
import UserDetailComponent from './components/user.detail.component';


const UserComponent = React.lazy(() => import('./components/user.component'));

const initState = {
    users : [],
    size : 0,
    user :{}
}

const allStoreEnhancements = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(userReducer, initState, allStoreEnhancements);

/*** init APP */
store.dispatch(apiRequest);


ReactDOM.render(
<Provider store={store}>
    <div className="App">
        <h2> User Management App</h2><hr/>
        <DataComponent />
        <div className="main-container">     
            <Router>
                <Suspense fallback={'Loading...'}>
                    <Route exact path="/" component={UserComponent} />
                </Suspense>
                
                <Route exact path="/userdetail/:userId" component={UserDetailComponent} />

                <Route exact path="/address" component={AddressComponent} />
                <Route exact path="/company" component={CompanyComponent} />
            </Router>
        </div>
    </div>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
