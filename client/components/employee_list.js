import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 20;


//refactor from a functional component to a class-based component
//const EmployeeList = (props) =>{
class EmployeeList extends Component {
	componentWillMount() {
		this.page = 1;
	}

	handleButtonClick() {
		Meteor.subscribe('employees', PER_PAGE * (this.page + 1));
		this.page += 1;
	}
	render(){
	//props.employees => an array of employee objects
	//Also class based ==> this.props

		return(
			<div>
				<div className='employee-list'>
					{this.props.employees.map(employee =>
					 <EmployeeDetail key={employee._id} employee={employee} />) }
				</div>
				<button onClick={()=> this.handleButtonClick()} className='btn btn-primary'>Load More...</button>
			</div>
			);
	}

};


export default createContainer(() =>{
	//set up subscription from Emoployees collection
	Meteor.subscribe('employees', PER_PAGE);

	//return an object. The returned object will be sent to
	//EmployeeList as props
	return { employees: Employees.find({}).fetch() };

} , EmployeeList);