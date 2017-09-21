var React = require("react");

import { HashRouter as Router, Route } from 'react-router-dom';


import Main from '../components/Main';

module.exports = (

    <Router>
        <Route path="/" component={Main} />
    </Router>

)