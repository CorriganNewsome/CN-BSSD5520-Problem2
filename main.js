'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const surveyButton = document.getElementById('submit');
	surveyButton.addEventListener('click', () => {
		const nameInput = document.getElementById('name');
		//console.log('Program has started.');
		const contentDiv = document.getElementById('message');
		contentDiv.innerHTML += nameInput.value;
		const surveyButton = document.getElementById('submit');
		let contentDivArray = [];

		if (surveyButton.innerHTML === 'Submit') {
			surveyButton.innerHTML === 'Erase';
			eraseText();
		} else if (surveyButton.innerHTML === 'erase') {
			surveyButton.innerHTML === 'erase';
			eraseText();
		}

		if (nameInput.value === ' ') {
			contentDiv.innerHTML = 'Error, please make a correct selection';
		}

		contentDiv.value = contentDivArray;
	});
});

function eraseText() {
	nameInput.replace('');
	contentDiv.replace('');
}
