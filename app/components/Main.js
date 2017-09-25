import React from 'react';
import { Route } from "react-router-dom";
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
// import Company from '../../models/Company';

import Companies from './pages/Companies';
import AddCompany from './pages/AddCompany';
import UpdateCompany from './pages/UpdateCompany';
import AddContact from './pages/AddContact';


class Main extends React.Component {

    addCompany() {

        var companyName = $('#company-name').val().trim();
        var companyStatus = $('#company-status').val().trim();
        var companyContacts = $('#company-contacts').val().trim();
        console.log(typeof(companyContacts));
        var companyPerformance = $('#company-performance').val().trim();

        var companyA = new Company(companyName,companyStatus,companyContacts,companyPerformance);
        console.log(companyA);
    }

    render(){
        return(
            <div>
                <Navbar />
                <h2>Hello World!</h2>
                <div className="container">
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input placeholder="Placeholder" id="company-name" type="text" className="validate" />
                                        <label htmlFor="company-name">Company Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="company-status" type="text" className="validate" />
                                        <label htmlFor="company-status">Company Status</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input placeholder="Placeholder" id="company-contacts" type="text" className="validate" />
                                        <label htmlFor="company-contacts">Company Contacts</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="company-performance" type="text" className="validate" />
                                        <label htmlFor="company-performance">Company Performance</label>
                                </div>
                            </div>
                            <button className="btn right"
                                type="submit" onClick={this.addCompany}>Submit
                            </button>
                        </form>
                    </div>
                    <Route path='/companies' component={Companies} />
                    <Route path='/updatecompany' component={UpdateCompany} />
                    <Route path='/addcompany' component={AddCompany} />
                    <Route path='/addcontact' component={AddContact} />
                </div>

                <Footer/>
            </div>
        )
    }

}

export default Main;
