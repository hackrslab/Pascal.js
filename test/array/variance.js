module( "variance test" );
test('분산 테스트',function(){
	var vars = Pascal.variance([70,40,100]);
	deepEqual(vars, 600, 'Pascal.variance([70,40,100]) === 600');	
});

test('각가의 배열값에 10배의 분산 구하기',function(){
	var vars = Pascal.variance([7,4,10],function(n) { return n*10;});
	deepEqual(vars, 600, 'Pascal.variance([7,4,10],function(n) { return n*10;}) === 600');	
});