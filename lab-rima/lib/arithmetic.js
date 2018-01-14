function add(num1, num2){
	if(typeof num1 === 'number' && typeof num2 === 'number'){
		return num1 + num2;
	}

	return null;
}

function sub(num3, num4){
	if(typeof num3 === 'number' && typeof num4 === 'number'){
		return num3 - num4;
	}

	return null;
}

module.exports = {
	add: add,
	sub: sub
}
