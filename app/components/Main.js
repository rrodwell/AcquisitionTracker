//React Dependencies
import React from 'react';

//Common Nav and Footer
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

//Children Components
import Companies from './pages/Companies';
import UpdateCompany from './modals/UpdateCompany';
import AddContact from './modals/AddContact';


class Main extends React.Component {

    render(){
        return(
            <div>
                <Navbar />
                    {this.props.children}
                <Footer/>
            </div>
        )
    }

}

export default Main;
