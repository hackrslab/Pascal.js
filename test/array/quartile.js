module('quartile test');

test('0,100 사분위 값',function(){
	var data = Pascal.quartile([0,100]),
			obj = [0, 25, 50, 75, 100];
	deepEqual(data,obj, "Pascal.quantile([0,100]) === [0, 25, 50, 75, 100]");
});

test('제 2사분위 값을 이용한 중위값 계산',function(){
	var data = Pascal.quartile([0,100]);

	deepEqual(data[2], 50, "Pascal.quartile([0,100])[2] === 50");
});
