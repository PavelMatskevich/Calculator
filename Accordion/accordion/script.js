var buttons = document.getElementsByTagName('button');

for (var i = 0; i < buttons.length; i++) {
	//buttons[i].addEventListener('click', toggleFunc);
	buttons[i].addEventListener('mouseover', mouseoverFunc);
	buttons[i].addEventListener('mouseout', mouseoutFunc);
	
	/*function toggleFunc(event) {
		
		var target = event.target;
		target.classList.toggle('active');
		var div = target.nextElementSibling;
		
		if (div.style.display === 'block') {
			div.style.display = 'none';
		} else {
			div.style.display = 'block';
		}
	}*/
	
	function mouseoverFunc(event) {
		var target = event.target;
		
		target.classList.toggle('active');
		var div = target.nextElementSibling;
		
		if (div.style.display === 'block') {
			div.style.display = 'none';
		} else {
			div.style.display = 'block';
		}
	}
	
	function mouseoutFunc(event) {
		
		var target = event.target;
		target.classList.toggle('active');
		var div = target.nextElementSibling;
		
		if (div.style.display === 'block') {
			div.style.display = 'none';
		} else {
			div.style.display = 'block';
		}
	}
}