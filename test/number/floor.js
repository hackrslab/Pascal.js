module( "floor test" );
test('자리수를 지정하지 않은 버림',function() {
	var rn = Pascal.floor(3.141592);
	deepEqual(rn, 3, "Pascal.floor(3.141592) === 3 : 소수점 첫째자리에서 버림");	
});

test('소수점 첫재짜리 까지 표현',function() {
	var rn = Pascal.floor(3.141592,1);
	deepEqual(rn, 3.1, "Pascal.floor(3.141592,1) === 3.1 : 소수점 둘째자리에서 버림");	
});

test('소수점 둘째자리 까지 표현',function() {
	var rn = Pascal.floor(3.141592,2);
	deepEqual(rn, 3.14, "Pascal.floor(3.141592,2) === 3.14 : 소수점 셋째자리에서 버림");	
});

test('소수점 셋째자리 까지 표현',function() {
	var rn = Pascal.floor(3.141592,3);
	deepEqual(rn, 3.141, "Pascal.floor(3.141592,3) === 3.141 : 소수점 셋째자리에서 버림");	
});

test('소수점 넷째자리 까지 표현',function() {
	var rn = Pascal.floor(3.141592,4);
	deepEqual(rn, 3.1415, "Pascal.floor(3.141592,4) === 3.1415 : 소수점 넷째자리에서 버림");	
});

test('버림 대상으로 문자열을 사용',function() {
	var rn = Pascal.floor('hello world');
	deepEqual(rn, 'undefined' , "Pascal.floor('hello world') === 'undefined'");	
});

test('버림 대상으로 숫자형 문자를 사용',function() {
	var rn = Pascal.floor('003.141592');
	deepEqual(rn, 3 , "Pascal.floor('003.141592') === 3");	
});

test('표현할 자리수를 문자를 사용하여 넘겼을 경우',function() {
	var rn = Pascal.floor(3.141592,'hello');
	deepEqual(rn, 3 , "Pascal.floor(3.141592,'hello') === 3");	
});


test('배열에 대한 처리 테스트[',function() {
	var rn = Pascal.floor([1,1.1,2,2.2,3,3.3,4,4.4,5,5.5]);
	deepEqual(rn, [1,1,2,2,3,3,4,4,5,5] , "Pascal.floor([1,1.1,2,2.2,3,3.3,4,4.4,5,5.5]) === [1,1,2,2,3,3,4,4,5,5]");	
});