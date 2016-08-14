import React from 'react';
import ReactDOM from 'react-dom';


const App = ()=> {
	return (
		<div>Hello There!</div>
	);
};

//After Meteor loads in browser, render the app in react-dom
Meteor.startup(()=>{
	//react render call
	ReactDOM.render(<App />, document.querySelector('.container'));
});