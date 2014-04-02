  var primerizer = function(input){
	var factors = [];
	var numStorage = input
	x=2
	while (numStorage != 1){
		var result = numStorage%x;
		if (result === 0) {
			factors.push(x);
			numStorage = numStorage/x
			x=2
		}
		else {
			x = x+1
		}
	}
	return factors.pop();
}

document.write(primerizer(600851475143)) 



/*
var primerizer = function(input){
	var factors = [];
	var numStorage = input
	for (x=2; numStorage != 1; x++){ 			// counter stops when the divisor is equal to the last number in the 
												// array, meaning the input has been fully factorized
		if (result === 0) {						// check if the number is prime; if it is not prime
			factors.push(x);					// add the divisor to the array of prime numbers
			numStorage = numStorage/x			// divide the number being calculated by the divisor
			x=2									// reset the divisor to 2 and continue
		};
	};
	primeFactor = factors.pop();
	return primeFactor;
}


document.write(primerizer(50)) */