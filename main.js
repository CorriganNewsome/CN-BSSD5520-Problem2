'use strict';

let userInput = [];
const secret = 'jhdjghfk';

document.addEventListener('DOMContentLoaded', () => {
	const surveyButton = document.getElementById('submit');
	surveyButton.addEventListener('click', () => {
		const inputField = document.getElementById('name');
		userInput.push(inputField.value);

		userInput[userInput.length - 1];

		if (userInput === '') {
			const errorMsg = document.getElementById('error');
			errorMsg.innerHTML = 'You made an error';
		} else {
			const errorMsg = document.getElementById('error');
			errorMsg.innerHTML = '';
			const entries = document.getElementById('entries');
			entries.innerHTML = userInput;
			inputField.value = '';
			inputField.focus();
		}
		console.log(userInput);
	});
});
