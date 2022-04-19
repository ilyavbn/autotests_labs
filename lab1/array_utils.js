function arraySum(nums) {
  let result = 0;

  nums.forEach(item => {
    result += item;
  });

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
 module.exports = {arraySum, arrayNegative,arrayPositive};

