module( "stdev(표본편차) test" );
test('표준편차 테스트',function(){
	var vars = Pascal.stdev([70,40,100]);
	deepEqual(vars, 30, 'Pascal.stdev([70,40,100]) === 24.49');	
});

test('각가의 배열값에 10배의 표준편차 구하기',function(){
	var vars = Pascal.stdev([7,4,10],function(n) { return n*10;});
	deepEqual(vars, 30, 'Pascal.stdev([7,4,10],function(n) { return n*10;}) === 30');	
});