const count = require('./problem');

describe("DCP-84", function(){
	it("should success on example", function(){
		const arr = [
      [ 1, 0, 0, 0, 0, ],
      [ 0, 0, 1, 1, 0, ],
      [ 0, 1, 1, 0, 0, ],
      [ 0, 0, 0, 0, 0, ],
      [ 1, 1, 0, 0, 1, ],
      [ 1, 1, 0, 0, 1, ],
    ];

	  expect(count(arr)).toEqual(4);
	});
  
	it("should check diagonals", function(){
		const arr = [
      [ 1, 0, 0, 0, 1, ],
      [ 0, 1, 0, 1, 0, ],
      [ 0, 0, 1, 0, 0, ],
      [ 0, 1, 0, 1, 0, ],
      [ 1, 0, 0, 0, 1, ],
    ];

	  expect(count(arr)).toEqual(1);
	});
  
	it("should return 0 on all 0", function(){
		const arr = [
      [ 0, 0, 0, 0, 0, ],
      [ 0, 0, 0, 0, 0, ],
      [ 0, 0, 0, 0, 0, ],
      [ 0, 0, 0, 0, 0, ],
      [ 0, 0, 0, 0, 0, ],
    ];

	  expect(count(arr)).toEqual(0);
	});
});