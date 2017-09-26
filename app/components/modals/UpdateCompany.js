import React from "react";
import { Link } from 'react-router-dom';

// import css from "../../public/css/footer.css";

class UpdateCompany extends React.Component {
    constructor(props){
        // Pass props to the parent component
        super(props);

        this.updateCompany = this.updateCompany.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.changeContact = this.changeContact.bind(this);
        this.changePerformance = this.changePerformance.bind(this);

        this.state = {
            companyOBJ: props.companyOBJ
        }

    }

    componentDidUpdate(){
        console.log("companyOBJprops: " +JSON.stringify(this.props.companyOBJ));
        console.log('state: '+ JSON.stringify(this.state));
    }

    componentWillUpdate () {
        console.log("companyOBJwillup: " +JSON.stringify(this.props.companyOBJ));
    }

    componentWillReceiveProps() {
        console.log("companyOBJwillrec: " +JSON.stringify(this.props.companyOBJ));
    }

    componentDidMount() {
        console.log("companyOBJdidmount: " +JSON.stringify(this.props.companyOBJ));
    }

    componentWillMount() {
        console.log("companyOBJwillmount: " +JSON.stringify(this.props.companyOBJ));
    }


    changeName(e) {
        this.props.companyOBJ.name = e.target.value;
    }

    changeStatus(e) {
        this.props.companyOBJ.status = e.target.value;
    }

    changePerformance(e) {
        this.props.companyOBJ.performance = e.target.value;
    }

    changeContact(e) {
        this.props.companyOBJ.contact = e.target.value;
    }

    updateCompany() {
        let companyName = $('#company-name').val().trim();
        let companyStatus = $('#company-status').val().trim();
        let companyContacts = $('#company-contacts').val().trim();
        let companyPerformance = $('#company-performance').val().trim();

        console.log(companyName);
        console.log(companyStatus);
        console.log(companyContacts);
        console.log(companyPerformance);
        let updatedCompanyOBJ = this.props.companyOBJ;
        // console.log(JSON.stringify(updatedCompanyOBJ));
        // updatedCompanyOBJ.name = companyName;
        // updatedCompanyOBJ.status = companyStatus;
        // updatedCompanyOBJ.contact = companyContacts;
        // updatedCompanyOBJ.performance = companyPerformance;
        // console.log(JSON.stringify(updatedCompanyOBJ));


        // this.props.data.push(companyA);
        // this.props.handleSubmit(updatedCompanyOBJ);
        // console.log(this.props.handleEdit);

        // this.props.handleSubmit(this.state.company);

        // this.clearForm();
    }

    clearForm() {
        document.getElementById("company-form").reset();
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
                                    <input id="company-name" type="text" className="validate" placeholder={this.props.companyOBJ.name} onChange={this.changeName}/>
                                    <label htmlFor="company-name">Company Name</label>
                                </div>
                                <div className="input-field col s12">
                                    <select id="company-status" placeholder={this.props.companyOBJ.status} onChange={this.changeStatus}>
                                        <option disabled>Choose the status</option>
                                        <option value="Approved">Approved</option>
                                        <option value="Pending Approved">Pending Approved</option>
                                        <option value="Researching">Researching</option>
                                        <option value="Declined">Declined</option>
                                    </select>
                                    <label htmlFor="company-status">Company Status</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="company-contacts" type="text" className="validate" placeholder={this.props.companyOBJ.contact}  onChange={this.changeContact}/>
                                    <label htmlFor="company-contacts">Company Contacts</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="company-performance" type="text" className="validate" placeholder={this.props.companyOBJ.performance} onChange={this.changePerformance}/>
                                    <label htmlFor="company-performance">Company Performance</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <Link to="/companies" className="waves-effect waves-red btn-flat close-modal delete" onClick={this.addCompany}>Delete</Link>
                    <Link to="/companies" className="waves-effect waves-green btn-flat close-modal" onClick={this.updateCompany}>Update</Link>
                </div>
            </div>
        )
    }
}

export default UpdateCompany;