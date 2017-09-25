var React = require("react");

import { HashRouter as Router, Route } from 'react-router-dom';


import Main from '../components/Main';

module.exports = (

    <Router>
        <Route path="/" component={Main} />
        <Route path="/Companies" component={Companies}/>
        <Route path="/AddCompany" component={AddCompany}/>
        <Route path="/UpdateCompany" component={UpdateCompany}/>
        <Route path="/AddContacts" component={AddContacts}/>
    </Router>

)