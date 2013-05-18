module('quantile test');

test('0,1 사이의 75% 위치 값',function(){
	var qn = Pascal.quantile([0,1],0.75);
	deepEqual(0.75,qn, "Pascal.quantile([0,1],0.75) === 0.75");
});

test('[1,2,3,4,5,6,7,8,9,10]의 중위값',function(){
	var qn = Pascal.quantile([1,2,3,4,5,6,7,8,9,10],0.5);
		deepEqual(5.5,qn, "Pascal.quantile([0,1],0.75) === 5.5");
});

