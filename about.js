console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}
function giveCompliment(evt) {
	// evt.preventDefault();
	
	alert('you can do it');
}


// let form = document.querySelector('#contact');
let form = document.querySelector('#submit');
let image = document.querySelector('img');

form.addEventListener('click', handleSubmit);
image.addEventListener('mouseover', giveCompliment);

