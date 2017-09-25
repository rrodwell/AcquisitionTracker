import React from "react";

class AddCompany extends React.Component {
    constructor(props){
        // Pass props to the parent component
        super(props);
        //Bind this
        this.addCompany = this.addCompany.bind(this);
    }

    addCompany() {

        let companyName = $('#company-name').val().trim();
        let companyStatus = $('#company-status').val().trim();
        let companyContacts = $('#company-contacts').val().trim();
        let companyPerformance = $('#company-performance').val().trim();
        let newID = this.props.data.length + 1;

        let companyA = {
            id: newID,
            name: companyName,
            status: companyStatus,
            contact: companyContacts,
            performance:companyPerformance
        };

        this.props.data.push(companyA);
        this.props.handleSubmit(this.props.data);

        console.log(this.props.data);
        this.clearForm();
    }

    clearForm() {
        document.getElementById("company-form").reset();
    }

    render() {
        return (
            <div id="addCompanyModal" className="modal">
                <div className="modal-content">
                    <h4>Add Company</h4>
                    <div className="row">
                        <form className="col s12" id="company-form">
                            <div className="row">
                                <div className="input-field col s8 offset-s2">
                                    <input id="company-name" type="text" className="validate" placeholder='Company ABC'/>
                                    <label htmlFor="company-name">Company Name</label>
                                </div>
                                <div className="input-field col s8 offset-s2">
                                    <select id="company-status">
                                        <option value="" disabled selected>Choose the status</option>
                                        <option value="Approved">Approved</option>
                                        <option value="Pending Approved">Pending Approved</option>
                                        <option value="Researching">Researching</option>
                                        <option value="Declined">Declined</option>
                                    </select>
                                    <label htmlFor="company-status">Company Status</label>
                                </div>
                                <div className="input-field col s8 offset-s2">
                                    <input id="company-contacts" type="text" className="validate" placeholder='John Smith'/>
                                    <label htmlFor="company-contacts">Company Contacts</label>
                                </div>
                                <div className="input-field col s8 offset-s2">
                                    <input id="company-performance" type="text" className="validate" placeholder='Excellent'/>
                                    <label htmlFor="company-performance">Company Performance</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <a className="modal-close waves-effect waves-green btn-flat" onClick={this.addCompany}>Add</a>
                </div>
            </div>
        )
    }
}

export default AddCompany;