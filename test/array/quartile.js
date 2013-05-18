module('quartile test');

test('0,100 사분위 값',function(){
	var data = Pascal.quartile([0,100]),
			obj = {q1 : 25, q2 : 50 , q3: 75, q4 : 100};
	deepEqual(data,obj, "Pascal.quantile([0,100]) === {q1 : 25, q2 : 50 , q3: 75, q4 : 100}");
});

test('제 2사분위 값을 이용한 중위값 계산',function(){
	var data = Pascal.quartile([0,100]);

	deepEqual(data.q2, 50, "Pascal.quartile([0,100]).q2 === 50");
});
