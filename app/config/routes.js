//React Dependencies
import React from 'react';
import { HashRouter as Router, Route, } from 'react-router-dom';

//Main Component
import Main from '../components/Main';
import UserLogin from '../components/UserLogin';
import RegisterUser from '../components/RegisterUser';

//Children Components
import Companies from '../components/pages/Companies';



module.exports = (
    <Router>
        {/*<Route path='/register' component={RegisterUser}/>*/}
        <Main>
            <Route exact path='/companies' component={Companies} />
        </Main>
    </Router>
);