//React Dependencies
import React from 'react';

//Common Nav and Footer
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

//Children Components
import Companies from './pages/Companies';
import UpdateCompany from './modals/UpdateCompany';


class Main extends React.Component {

    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }

}

export default Main;
