import React from 'react';
import ReactDOM from 'react-dom';

import EmployeeList from './components/employee_list'


const App = ()=> {
	return (
		<div>
			< EmployeeList />
		</div>
	);
};

//After Meteor loads in browser, render the app in react-dom
Meteor.startup(()=>{
	//react render call
	ReactDOM.render(<App />, document.querySelector('.container'));
});