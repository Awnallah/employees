import _ from 'lodash';
import {Meteor} from 'meteor/meteor';
import { Employees } from '../imports/collections/employees'
import { image, helpers } from 'faker';


Meteor.startup(()=>{
	//generate data

	//check if data exists in the collection
	const numberRecords = Employees.find({}).count();
	console.log(numberRecords);

	if (!numberRecords) {
		//generate data
		_.times(5000, ()=> {
			//const name = helpers.createCard().name;
			const { name, email, phone } = helpers.createCard();

			//save to mongodb
			Employees.insert({
				//val and key are identical ==> use ES6 shortcut
				name ,email, phone,
				avatar: image.avatar()
			});

		});

	}

});