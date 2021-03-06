//React Dependencies
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

//Main Component
import Main from '../components/Main';

//Children Components
import UserLogin from '../components/pages/UserLogin';
import RegisterUser from '../components/pages/RegisterUser';
import Companies from '../components/pages/Companies';




module.exports = (
    <Router>
        <Main>
            <Route exact path='/' component={UserLogin}/>
            <Route  path='/register' component={RegisterUser} />
            <Route  path='/companies' component={Companies} />
        </Main>
    </Router>
);