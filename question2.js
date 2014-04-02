// find sum of even-valued fibonacci numbers under 4 million

var findFibs = function(max) {
	
	var fibNums = [1, 1, 2, 3]
	var sum = 0
	var length = fibNums.length

	while (fibNums[length-1] < max) {
	fibNums.push(fibNums[length-1] + fibNums[length-2])
	length = fibNums.length
	};
	for (var x = 0; x<fibNums.length; x++){
		if (fibNums[x]%2 === 0)
			sum += fibNums[x];
	};
	return sum
	
}

document.write(findFibs(4000000));
d

//* possibly faster method which checks even/odd status as it finds the number

//find next fibonnaci number 


//check if it is divisable by two

//if so, add it to a sum variable