const operations = require("./math_operations.js");
// Sum
test('adds 1+2 to equal 3',() =>{
	expect(operations.sum(1,2)).toBe(3);
});
test('adds 1+(-2) to equal -1',() =>{
	expect(operations.sum(1,-2)).toBe(-1);
});

// Sub
test('subtract 1-2 to equal -1',() =>{
	expect(operations.sub(1,2)).toBe(-1);
});
test('subtract 100-2 to equal 98',() =>{
	expect(operations.sub(100,2)).toBe(98);
});

//Multiplicate
test('multiplicate 100*2 to equal 200',() =>{
	expect(operations.mult(100,2)).toBe(200);
});
test('multiplicate 100*(-100) to equal -10000',() =>{
	expect(operations.mult(100,-100)).toBe(-10000);
});

//Divide
test('divide 100/100 to equal 1',() =>{
	expect(operations.div(100,100)).toBe(1);
});
test('multiplicate 100/(-100) to equal -10000',() =>{
	expect(operations.div(100,-100)).toBe(-1);
});
