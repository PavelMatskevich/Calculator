var button1 = document.getElementById('plus').addEventListener('click', plus);
var button2 = document.getElementById('minus').addEventListener('click', minus);
var button3 = document.getElementById('mnoz').addEventListener('click', multiplication);
var button4 = document.getElementById('del').addEventListener('click', division);
	
	function plus() {
		var input1, input2, result; 
		input1 = document.getElementById('inp1').value;
		input1 = parseInt(input1);
		input2 = document.getElementById('inp2').value;
		input2 = parseInt(input2);
		result = input1 + input2;
		document.getElementById('res').innerHTML = result;
	}
	
	function minus() {
		var input1, input2, result;
		input1 = document.getElementById('inp1').value;
		input1 = parseInt(input1);
		input2 = document.getElementById('inp2').value;
		input2 = parseInt(input2);
		result = input1 - input2;
		document.getElementById('res').innerHTML = result;
	}
	
	function multiplication() {
		var input1, input2, result;
		input1 = document.getElementById('inp1').value;
		input1 = parseInt(input1);
		input2 = document.getElementById('inp2').value;
		input2 = parseInt(input2);
		result = input1 * input2;
		document.getElementById('res').innerHTML = result;
	}
	
	function division() {
		var input1, input2, result;
		input1 = document.getElementById('inp1').value;
		input1 = parseInt(input1);
		input2 = document.getElementById('inp2').value;
		input2 = parseInt(input2);
		
		if (input1 != 0 && input2 != 0) {
			 result = input1 / input2;
		} else {
			result = "0 не коректное число";
		}
		document.getElementById('res').innerHTML = result;
	}
	

	