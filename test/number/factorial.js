module( "factorial test" );
test('10!',function(){
	var fn = Pascal.fact(10);
	deepEqual(fn, 3628800, "Pascal.fact(10) === 3628800");
});

test('1!',function(){
	var fn = Pascal.fact(1);
	deepEqual(fn, 1, "Pascal.fact(1) === 1");
});

test('0!',function(){
	var fn = Pascal.fact(0);
	deepEqual(fn, 1, "Pascal.fact(0) === 0");
});

test('-1!',function(){
	var fn = Pascal.fact(-1);
	deepEqual(fn, -1, "Pascal.fact(-1) === -1");
});

test('-10!',function(){
	var fn = Pascal.fact(-10);
	deepEqual(fn, -1, "Pascal.fact(-10) === -1");
});

test('문자를 넘길 경우',function(){
	var fn = Pascal.fact('hello world');
	deepEqual(fn, NaN, "Pascal.fact('hello world') === NaN");
});