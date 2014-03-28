
var findDivs = function(input){
    var sum = 0;
        for (var x=1; x<input; x++) {
	    if (x%3===0 || x%5===0) {
		    sum += x;
	    }
	   }
    return sum;
};

document.write(findDivs(1000));