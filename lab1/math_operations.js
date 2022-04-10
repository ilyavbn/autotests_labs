function sum(a, b){
	return a+b;
}

function div(a, b){
	if(b!=0){return a/b}else{
		console.log("ZeroDivisionError")
	}
}

function mult(a, b){
	return a*b;
}

function sub(a,b){
	return a-b;
}

module.exports =	{sum,div,mult,sub};
