module( "max test" );
test('숫자 순차 배열의 최대값',function(){
	var fn = Pascal.max([1,2,,3,4,5,10]);
	deepEqual(fn, 10, "Pascal.fact([1,2,,3,4,5,10]) === 10");
});

test('순서 없는 숫자 배열의 최대값',function(){
	var fn = Pascal.max([1,-2,-3,4,5,-10]);
	deepEqual(fn, 5, "Pascal.fact(1,-2,-3,4,5,-10]) === 5");
});


test('문자열이 포함된 배열의 최대값',function(){
	var fn = Pascal.max(['hello',1,-2,-3,4,5,-10]);
	deepEqual(fn, 5, "Pascal.fact('hello',1,-2,-3,4,5,-10]) === 5");
});


test('숫자형 문자열이 포함된 배열의 최대값',function(){
	var fn = Pascal.max(['1000',1,-2,-3,4,5,-10]);
	deepEqual(fn, 1000, "Pascal.fact('-1000',1,-2,-3,4,5,-10]) === 1000");
});