import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

class Main extends React.Component {

    render(){
        return(
            <div>
                <Navbar />
                <h2>Hello World!</h2>
                <Footer/>
            </div>
        )
    }

}

export default Main;
