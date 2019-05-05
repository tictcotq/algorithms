const find = require('./task');

describe("find in sorted matrix", function() {
	it("should pass an example (positive)", function() {
		const mtx = [
    	[ 1,  4,  7,  11, 15, ],
    	[ 2,  5,  8,  12, 19, ],
    	[ 3,  6,  9,  16, 22, ],
    	[ 10, 13, 14, 17, 24, ],
    	[ 18, 21, 23, 26, 30, ],
    ];

	  expect(find(mtx, 5)).toEqual(true);
	});
	
		it("should pass an example (negative)", function() {
		const mtx = [
    	[ 1,  4,  7,  11, 15, ],
    	[ 2,  5,  8,  12, 19, ],
    	[ 3,  6,  9,  16, 22, ],
    	[ 10, 13, 14, 17, 24, ],
    	[ 18, 21, 23, 26, 30, ],
    ];

	  expect(find(mtx, 20)).toEqual(false);
	});
});