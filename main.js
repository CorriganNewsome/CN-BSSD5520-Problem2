/*
Task 1: Add a listener to the Submit button so that when the button is clicked, you store in memory whatever is typed in the Input field.

Task 2: If nothing was in the Input field when Submit was pressed, display an error message in a div. If they press Submit again and there is input this time, delete any error messages on screen.

Task 3: Take the input that is in memory and add it to a div, clearing out the Input field.

Task 4: Store the input from the Input field into an array in memory.

Task 5: Compare the last thing the user typed with a seret password string that you invent and store in memory.

Task 6: If the password from Input is correct, display any strings stored in the array and let the user know someone tried to hack them.

Task 7: If the password is not correct, display an error message.

Task 8: If there have been 4 incorrect passwords entered and stored in the array, delete the button from the screen and let the user know the account has been locked.
*/

'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const surveyButton = document.getElementById('submit');
	surveyButton.addEventListener('click', () => {
		const nameInput = document.getElementById('name');
		//console.log('Program has started.');
		const contentDiv = document.getElementById('message');
		contentDiv.innerHTML += nameInput.value;
		const surveyButton = document.getElementById('submit');
		surveyButton.innerHTML = 'Erase';

		if (surveyButton.innerHTML === 'Erase') {
			eraseText();
		} else if (surveyButton.innerHTML === 'Submit') {
			surveyButton.innerHTML === 'Erase';
		}

		if (contentDiv === ' ') {
			contentDiv.innerHTML = 'Error, please make a correct selection';
		}
	});
});

function eraseText() {
	document.getElementById('name').value = ' ';
	document.getElementById('message').value = ' ';
}
