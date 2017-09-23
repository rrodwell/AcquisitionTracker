import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Company from '../../models/Company';

class Main extends React.Component {

    addCompany() {

        var companyName = $('#company-name').val();
        var companyStatus = $('#company-status').val();
        var companyContacts = $('#company-contacts').val();
        console.log(typeof(companyContacts));
        var companyPerformance = $('#company-performance').val();

        var companyA = new Company(companyName,companyStatus,companyContacts,companyPerformance);
        console.log(companyA);
    }

    render(){
        return(
            <div>
                <Navbar />
                <h2>Hello World!</h2>
                <div className="contaienr">
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
                </div>
                <Footer/>
            </div>
        )
    }

}

export default Main;
