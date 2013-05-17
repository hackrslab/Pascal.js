module( "median test" );
test('홀수 배열 중앙값 테스트',function(){
	var mn = Pascol.median([1,2,3,4,5]);
	deepEqual(mn, 3, 'Pascol.midean([1,2,3,4,5]) === 3');	
});

test('짝수 배열값에 중앙값 테스트',function(){
	var mn = Pascol.median([1,2,3,4,5,6]);
	deepEqual(mn, 3.5, 'Pascol.midean([1,2,3,4,5,6]) === 3.5');	
});

test('순서가 뒤섞인 홀수 배열 중앙값 테스트',function(){
	var mn = Pascol.median([1,5,3,2,4]);
	deepEqual(mn, 3, 'Pascol.midean([1,5,3,2,4]) === 3');	
});

test('순서가 뒤섞인 짝수 배열 중앙값 테스트',function(){
	var mn = Pascol.median([1,5,3,6,2,4]);
	deepEqual(mn, 3.5, 'Pascol.midean([1,5,3,6,2,4]) === 3.5');	
});

test('문자열이 포함된 배열 중앙값 테스트',function(){
	var mn = Pascol.median([1,5,3,6,'hello world',2,4]);
	deepEqual(mn, 3.5, "Pascol.midean([1,5,3,6,'hello world',2,4]) === 3.5");	
});

test('문자열로만 이루어진 배열 중앙값 테스트',function(){
	var mn = Pascol.median(['hello','world','korea']);
	deepEqual(mn, null, "Pascol.median(['hello','world','korea'] === null");	
});

test('각각의 배열값에 10배를 한 값을 가진 짝수 배열 중앙값 테스트',function(){
	var mn = Pascol.median([1,5,3,6,2,4],function(n) {return n*10;});
	deepEqual(mn, 35, 'Pascol.midean([1,5,3,6,2,4],function(n) {return n*10;}) === 35');	
});