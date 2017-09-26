// React Dependencies
import React from "react";
import { Link } from 'react-router-dom';


import AddCompany from "../modals/AddCompany";
import UpdateCompany from "../modals/UpdateCompany";

class Companies extends React.Component {
    constructor(props){
        // Pass props to the parent component
        super(props);
        // Set initial state
        this.state = {
            // State needed
            companies: [],
            companyOBJ: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.getCompanies = this.getCompanies.bind(this);
        this.deleteCompany = this.deleteCompany.bind(this);
    }


    getCompanies() {
        fetch('/companydata')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({companies: responseJson});
            })
            .catch((error) => {
                console.error(error);
            });
    }


    componentDidUpdate(){

    }

    componentDidMount(){
        this.getCompanies();
        console.log("MongoDB: " + this.state.companies);
    }

    handleSubmit(companyArr) {
        fetch('/companydata',{
            method: "POST",
            body: JSON.stringify(companyArr),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(JSON.stringify(error));
            });
    }

    handleEdit(e) {
        let dataKey = e.target.id;
        let companiesData = this.state.companies;
        console.log(dataKey);
        for(let i = 0; i < companiesData.length; i++){
            if(companiesData[i]._id == dataKey) {
                let obj = companiesData[i];
                this.setState({companyOBJ:obj});
            }
        }
    }

    deleteCompany(id) {
        fetch(`/companydata/${id}?_method=DELETE`, {
            method: "POST"
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(JSON.stringify(error));
            });
    }

    render() {

        const companiesTable = this.state.companies.map((companies) => {
            return (

                <tr key={companies._id}>
                    <td>{companies.name}</td>
                    <td>{companies.status}</td>
                    <td>{companies.contact}</td>
                    <td>{companies.performance}</td>
                    <td><Link to="/companies" className="updateCompany" data-target="updateCompanyModal" onClick={this.handleEdit}><i className="material-icons" id={companies._id}>edit</i></Link></td>
                </tr>
            )
        });

        return (
            <div className="companies center">
                <div className= "table-container">
                    <h3>Target Companies</h3>
                    <table className="bordered highlight centered">
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Status</th>
                                <th>Company Contact</th>
                                <th>Performance</th>
                                <th>Update/Edit</th>
                            </tr>
                             </thead>

                        <tbody>
                            {companiesTable}
                        </tbody>
                    </table>
                </div>

                <a data-target="addCompanyModal" className="btn-floating btn-large waves-effect waves-light red right modal-trigger addCompany" ><i className="material-icons">add</i></a>


                <AddCompany handleSubmit={this.handleSubmit} data={this.state.companies}/>

                <UpdateCompany handleSubmit={this.handleSubmit} data={this.state.companies} handleEdit = {this.handleEdit} companyOBJ={this.state.companyOBJ} deleteCompany = {this.deleteCompany}/>

            </div>
        )
    }
}

export default Companies;