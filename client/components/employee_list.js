import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';

const EmployeeList = (props) =>{
	//props.employees => an array of employee objects
	console.log(props.employees);
	return(
		<div>
			<div className='employee-list'>
			Employee list here
			</div>
		</div>
		);

};


export default createContainer(() =>{
	//set up subscription from Emoployees collection
	Meteor.subscribe('employees');

	//return an object. The returned object will be sent to
	//EmployeeList as props
	return { employees: Employees.find({}).fetch() };

} , EmployeeList);