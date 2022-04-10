function arraySum(nums){
	result = 0;
	for (let num of nums){
		result += nums[num];	
	}
	return result;
}

function arrayPositive(nums){
	result = [];
	for (let num of nums){
		if(num > 0){
			result.push(num);
		}
	}
	return result;
}

function arrayNegative(nums){
	result = [];
	for (let num of nums){
		if(num < 0){
			result.push(num);
		}
	}
	return result;
}
