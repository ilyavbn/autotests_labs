const arrays = require("./array_utils.js")

let values;
let sum;
let positive;
let negative;

beforeAll(() => {
		positive = [2,1,3];
		negative = [-2,-1,-2];
		values = positive.concat(negative);
		sum = values.reduce((x,y) => x + y, 0);
})

test('sum of values  = 2', () => {
		expect(arrays.arraySum(values)).toBe(sum);

});
test('Should be positive', () => {
		expect(arrays.arrayPositive(values)).toEqual(positive);

});
test('Should be negative', () => {
		expect(arrays.arrayNegative(values)).toEqual(negative);

});
