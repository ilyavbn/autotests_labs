const { isPalindrome, isAnagram } = require('./string_operations');
const arrays = require("./array_utils.js")

describe('testing math utilities', () => {

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
});
describe('testing string utilities', () => {

    test.each(["racecar", "radar", "level", "refer", "deified", "civic"])(
        'testing %s for palindrome', (word) => {
            expect(isPalindrome(word)).toBeTruthy();
        },
    );

    test.each([["arc", "car"], ["cat", "act"], ["cider", "cried"]])(
        'testing if %s and %s are anagrams ', (word1, word2) => {
            expect(isAnagram(word1, word2)).toBeTruthy();
        },
    );
});
