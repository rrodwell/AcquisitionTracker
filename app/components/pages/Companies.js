// React Dependencies
import React from "react";
import axios from "axios";

import AddCompany from "../modals/AddCompany";
import UpdateCompany from "../modals/UpdateCompany";
// import css from "../../public/css/footer.css";

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
        console.log("stateKey: "+ this.state.key);
    }

    componentDidMount(){
        this.getCompanies();
        console.log("MongoDB: " + this.state.companies);
        console.log("fuck");
    }

    handleSubmit(companyArr) {
        // console.log(JSON.stringify(companyArr));
        // if(companyArr.id > this.state.companies.length){
        //     this.setState({companies: this.state.companies.concat([companyArr])});
        //
        // } else {
        //     for(var i = 0; i < this.state.companies.length; i++){
        //         if(this.state.companies[i].id == this.state.companyOBJ.id){
        //
        //             companyArr.id = this.state.companyOBJ.id
        //             this.state.companies[i] = companyArr;
        //             this.setState({companies: this.state.companies});
        //         }
        //     }
        // }
        this.setState(companyArr);
    }

    handleEdit(e) {
        var dataKey = e.target.id;
        console.log("this ran: "+ dataKey);
        var companiesData = this.state.companies;
        for(var i = 0; i < companiesData.length; i++){
            if(companiesData[i]._id == dataKey) {
                var obj = companiesData[i];
                this.setState({companyOBJ:obj});
            }
        }
    }

    deleteCompany(company) {
        var index;
        var companyList = this.state.companies;
        for(var i = 0; i < companyList.length; i++){
            if(companyList[i].id === this.state.companyOBJ.id){
                index = companyList.indexOf(companyObj);
            }
        }

    }

    render() {

        const companiesTable = this.state.companies.map((companies) => {
            return (

                <tr key={companies._id}>
                    <td>{companies.name}</td>
                    <td>{companies.status}</td>
                    <td>{companies.contact}</td>
                    <td>{companies.performance}</td>
                    <td><a className="updateCompany" data-target="updateCompanyModal" onClick={this.handleEdit}><i className="material-icons" id={companies._id}>edit</i></a></td>
                </tr>
            )
        });

        return (
            <div className="companies center">
                <div className= "table-container">
                    <h3>Target Comapnies</h3>
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

                <UpdateCompany handleSubmit={this.handleSubmit} data={this.state.companies} handleEdit = {this.handleEdit} companyOBJ={this.state.companyOBJ}/>

            </div>
        )
    }
}

export default Companies;