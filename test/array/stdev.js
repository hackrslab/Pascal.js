module( "stdev test" );
test('표준편 테스트',function(){
	var vars = Pascal.stdev([70,40,100]);
	deepEqual(vars, 24.49, 'Pascal.stdev([70,40,100]) === 24.49');	
});

test('각가의 배열값에 10배의 표준편차 구하기',function(){
	var vars = Pascal.stdev([7,4,10],function(n) { return n*10;});
	deepEqual(vars, 24.49, 'Pascal.stdev([7,4,10],function(n) { return n*10;}) === 24.49');	
});