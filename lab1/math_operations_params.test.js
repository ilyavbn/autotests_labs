const operations = require("./math_operations.js");

const sumTestCases = test.each`
	a				|	b				|	expectedOutput
	${100}|	${20}	|	${120}
	${100}|	${-20}	|	${80}
	${100}|	${400}	|	${500}
`
const multiTestCases = test.each`
	a				|	b				|	expectedOutput
	${100}|	${20}	|	${2000}
	${100}|	${-20}	|	${-2000}
	${100}|	${400}	|	${40000}
`
const divTestCases = test.each`
	a				|	b				|	expectedOutput
	${100}|	${20}	|	${5}
	${100}|	${-20}	|	${-5}
	${100}|	${400}	|	${0.25}
`
const subTestCases = test.each`
	a				|	b				|	expectedOutput
	${100}|	${20}	|	${80}
	${100}|	${-20}	|	${120}
	${100}|	${400}	|	${-300}
`

describe("sum test", ()=> {
	sumTestCases ('sum of $a and $b should return $expectedOutput',
		({a, b, expectedOutput}) => {
			expect(operations.sum(a, b)).toBe(expectedOutput)
		})
})

describe("muliply test", ()=> {
	multiTestCases ('multi of $a and $b should return $expectedOutput',
		({a, b, expectedOutput}) => {
			expect(operations.mult(a, b)).toBe(expectedOutput)
		})
})

describe("div test", ()=> {
	divTestCases ('div of $a and $b should return $expectedOutput',
		({a, b, expectedOutput}) => {
			expect(operations.div(a, b)).toBe(expectedOutput)
		})
})

describe("sub test", ()=> {
	subTestCases ('sub of $a and $b should return $expectedOutput',
		({a, b, expectedOutput}) => {
			expect(operations.sub(a, b)).toBe(expectedOutput)
		})
})
