import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import App from './App';
import history from './history.js';
import ProductDetails from './ProductDetails';
import Profile from './Profile.js';
import UserProvider from './UserProvider';
const AppRouter = ()=>{
   return (
    <UserProvider>
   <Router hsitory={history}>
     <Switch>
        <Route path="/" component={App} exact={true}/>
        <Route path="/other" component={ProductDetails} exact={true}/>
        <Route path="/profile" component={Profile} exact={true} />
     </Switch>
    </Router>
    </UserProvider>
    );
};

export default AppRouter;
