module( "분산(모집단 분산,표본분산) test" );
test('표본분산 테스트',function(){
	var array = [70,40,100],
			fn = function(n) { return n*10;};
	deepEqual(Pascal.variance(array), 900, 'Pascal.variance([70,40,100]) === 900');	
	deepEqual(Pascal.variance(array,fn), 90000, 'Pascal.variance([70,40,100],function(n) { return n*10;}) === 9000');
});

test('모집단 분산 구하기',function(){
	var array = [70,40,100],
			fn = function(n) { return n*10;};
	deepEqual(Pascal.varp(array), 600, 'Pascal.varp([70,40,100]) === 600');	
	deepEqual(Pascal.varp(array,fn), 60000, 'Pascal.varp([70,40,100],function(n) { return n*10;}) === 60000');
});