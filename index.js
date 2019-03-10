const display = document.querySelector('.display');

document.querySelectorAll('.digits button, .opers button')
	.forEach(button => button.addEventListener('click', digitPressed));

function digitPressed(e) {
		console.log('digitPressed');
    display.value += e.target.innerHTML;
}

document.querySelectorAll('.opers button')
	.forEach(button => button.addEventListener('click', opersPressed));

function opersPressed(e) {
		console.log('opersPressed');
        display.value += e.target.innerHTML;
}

document.querySelectorAll('.equal')
	.forEach(button => button.addEventListener('click', equalPressed));

function equalPressed() {
		console.log('equalPressed');
    display.value = eval(display.value);
}

document.querySelectorAll('.clear')
	.forEach(button => button.addEventListener('click', clearPressed));

function clearPressed() {
		console.log('clearPressed');
    display.value = "";
}
