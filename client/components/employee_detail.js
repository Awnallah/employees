import React from 'react';

const EmployeeDetail = ({employee}) =>{
	//props.employee is object passed

	//destructure; avoit repetition:
	const { name, email, phone, avatar } = employee;

	return (
		<div className='thumbnail'>
			<img src={avatar} />
			<div className='caption'>
				<h3>{name} </h3>
				<ul>
					<li className='list-group-item'>Email: {email} </li>
					<li className='list-group-item'>Phone: {phone} </li>
				</ul>
			</div>
		</div>
		);
};

export default EmployeeDetail;