import React from "react";
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
            key: 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount(){
        // Static data
        const data = [
            {
                id: 1,
                name: 'Honda',
                status: 'Pending Approval',
                contact: 'Accord Crosstour',
                performance: '$16,811'

            },
            {
                id: 2,
                name: 'Mercedes-Benz',
                status: 'Declined',
                contact: 'AMG',
                performance: '$138,157'

            },
            {
                id: 3,
                name: 'BMW',
                status: 'Pending Approval',
                contact: 'X6',
                performance: '$68,999'
            },
            {
                id: 4,
                name: 'Ford',
                status: 'Researching',
                contact: 'Edge',
                performance: '$36,275'
            },
            {
                id: 5,
                name: 'Dodge',
                status: 'Approved',
                contact: 'Viper',
                performance: '$123,890'
            }
        ];
        // Update state
        this.setState({companies: data});
    }


    handleSubmit(companyObj) {

        this.setState({companies: companyObj});

    }

    handleEdit(i, event) {
        console.log(i);
        return i;
        // this.setState({key: i});
        // console.log(this.state.key);
    }

    render() {

        const companiesTable = this.state.companies.map((companies) => {
            return (

                <tr key={companies.id} >
                    <td>{companies.name}</td>
                    <td>{companies.status}</td>
                    <td>{companies.contact}</td>
                    <td>{companies.performance}</td>
                    <td><a className="updateCompany" data-target="updateCompanyModal" data-key={companies.id}><i className="material-icons">edit</i></a></td>
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
                <UpdateCompany handleSubmit={this.handleSubmit} data={this.state.companies} handleEdit = {this.handleEdit}/>

            </div>
        )
    }
}

export default Companies;