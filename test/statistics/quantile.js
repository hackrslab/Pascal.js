module('quantile test');

test('0,1 사이의 75% 위치 값',function(){
	var qn = Pascal.quantile([0,1],0.75);
	deepEqual(qn,0.75, "Pascal.quantile([0,1],0.75) === 0.75");
});

test('[1,2,3,4,5,6,7,8,9,10]의 중위값',function(){
	var qn = Pascal.quantile([1,2,3,4,5,6,7,8,9,10],0.5);
		deepEqual(qn,5.5, "Pascal.quantile([0,1],0.75) === 5.5");
});

test('0~100 사이의 80% 구간 값',function(){
	var qn = Pascal.quantile([0,100],0.8);
		deepEqual(qn, 80 , "Pascal.quantile([0,100],0.8) === 80");
});