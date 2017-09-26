import React from "react";
// import css from "../../public/css/footer.css";

class UpdateCompany extends React.Component {
    constructor(props){
        // Pass props to the parent component
        super(props);

        // this.submit = this.submit.bind(this);

    }

    updateCompany() {

        // let companyName = $('#company-name').val().trim();
        // let companyStatus = $('#company-status').val().trim();
        // let companyContacts = $('#company-contacts').val().trim();
        // let companyPerformance = $('#company-performance').val().trim();
        // let newID = this.props.data.length + 1;
        //
        // let companyA = {
        //     id: newID,
        //     name: companyName,
        //     status: companyStatus,
        //     contact: companyContacts,
        //     performance:companyPerformance
        // };
        //
        // this.props.data.push(companyA);
        // this.props.handleSubmit(this.props.data);
        console.log(this.props.handleEdit);
        // this.clearForm();
    }

    render() {
        return (
            <div id="updateCompanyModal" className="modal">
                <span className="close cursor close-modal"><i className="material-icons">close</i></span>
                <div className="modal-content">
                    <h4>Update Company</h4>
                    <div className="row">
                        <form className="col s12" id="company-form">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="company-name" type="text" className="validate" placeholder={this.props.data.name}/>
                                    <label htmlFor="company-name">Company Name</label>
                                </div>
                                <div className="input-field col s12">
                                    <select id="company-status" placeholder={this.props.data.status}>
                                        <option value="" disabled selected>Choose the status</option>
                                        <option value="Approved">Approved</option>
                                        <option value="Pending Approved">Pending Approved</option>
                                        <option value="Researching">Researching</option>
                                        <option value="Declined">Declined</option>
                                    </select>
                                    <label htmlFor="company-status">Company Status</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="company-contacts" type="text" className="validate" placeholder={this.props.data.contact}/>
                                    <label htmlFor="company-contacts">Company Contacts</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="company-performance" type="text" className="validate" placeholder={this.props.data.performance}/>
                                    <label htmlFor="company-performance">Company Performance</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <a className="waves-effect waves-red btn-flat close-modal delete" onClick={this.addCompany}>Delete</a>
                    <a className="waves-effect waves-green btn-flat close-modal" onClick={this.updateCompany}>Update</a>
                </div>
            </div>
        )
    }
}

export default UpdateCompany;