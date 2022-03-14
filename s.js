function sayHello() {
	alert('Hello, I am your pet rock')
}
function touchRock() {
	let userName = prompt('Как Вас зовут?', ' ')

	if (userName) {
		alert('Рад вас видеть'+userName+'!')
		document.getElementById('rockImg').src = 'rock_happy.png'
		setTimeout("document.getElementById('rockImg').src = 'rock.png';", 5000);
	}
}
