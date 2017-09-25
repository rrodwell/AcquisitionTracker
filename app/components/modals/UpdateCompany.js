import React from "react";
// import css from "../../public/css/footer.css";

class UpdateCompany extends React.Component {
    constructor(props){
        // Pass props to the parent component
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit() {

        var companyName = $('#company-name').val().trim();
        var companyStatus = $('#company-status').val().trim();
        var companyContacts = $('#company-contact').val().trim();
        var companyPerformance = $('#company-performance').val().trim();
        var newID = this.props.data.length + 1;

        var companyA = {
            id: newID,
            name: companyName,
            status: companyStatus,
            contact: companyContacts,
            performance:companyPerformance
        };

        this.props.data.push(companyA);
        this.props.handleSubmit(this.props.data);
        // this.props.handleSubmit(companyA);

        console.log(this.props.data);
    }
    render() {
        return (
            <div className="update-company">
                <h2>Update Company</h2>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="company-name" type="text" className="validate" />
                                <label htmlFor="company-name">Company Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="company-status" type="text" className="validate" />
                                <label htmlFor="company-status">Company Status</label>
                            </div>
                        </div>
                            <div className="input-field col s6">
                                <input id="company-contact" type="text" className="validate" />
                                <label htmlFor="company-contact">Company Contact</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="company-performance" type="text" className="validate" />
                                <label htmlFor="company-performance">Company Performance</label>
                            </div>
                        <button className="btn waves-effect waves-light" type="submit" onClick={this.submit}>Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default UpdateCompany;