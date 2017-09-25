//React Dependencies
import React from 'react';
import { HashRouter as Router, Route, } from 'react-router-dom';

//Main Component
import Main from '../components/Main';

//Children Components
import Companies from '../components/pages/Companies';
import UserLogin from '../components/pages/UserLogin';


module.exports = (
    <Router>
        <Main>
            <Route exact path='/companies' component={Companies} />
        </Main>
    </Router>
);