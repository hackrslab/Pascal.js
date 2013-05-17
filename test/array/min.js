module( "min test" );
test('숫자 순차 배열의 최소값',function(){
	var fn = Pascol.min([1,2,,3,4,5,10]);
	deepEqual(fn, 1, "Pascol.fact([1,2,,3,4,5,10]) === 1");
});

test('순서 없는 숫자 배열의 최소값',function(){
	var fn = Pascol.min([1,-2,-3,4,5,-10]);
	deepEqual(fn, -10, "Pascol.fact(1,-2,-3,4,5,-10]) === 1");
});


test('문자열이 포함된 배열의 최소값',function(){
	var fn = Pascol.min(['hello',1,-2,-3,4,5,-10]);
	deepEqual(fn, -10, "Pascol.fact('hello',1,-2,-3,4,5,-10]) === 1");
});


test('숫자형 문자열이 포함된 배열의 최소값',function(){
	var fn = Pascol.min(['-1000',1,-2,-3,4,5,-10]);
	deepEqual(fn, -1000, "Pascol.fact('-1000',1,-2,-3,4,5,-10]) === 1");
});