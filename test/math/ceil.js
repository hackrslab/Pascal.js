module( "ceil test" );
test('자리수를 지정하지 않은 올림',function() {
	var rn = Pascal.ceil(3.141592);
	deepEqual(rn, 4, "Pascal.ceil(3.141592) === 4 : 소수점 첫째자리에서 올림");	
});

test('소수점 첫재짜리 까지 표현',function() {
	var rn = Pascal.ceil(3.141592,1);
	deepEqual(rn, 3.2, "Pascal.ceil(3.141592,1) === 3.2 : 소수점 둘째자리에서 올림");	
});

test('소수점 둘째자리 까지 표현',function() {
	var rn = Pascal.ceil(3.141592,2);
	deepEqual(rn, 3.15, "Pascal.ceil(3.141592,2) === 3.15 : 소수점 셋째자리에서 올림");	
});

test('소수점 셋째자리 까지 표현',function() {
	var rn = Pascal.ceil(3.141592,3);
	deepEqual(rn, 3.142, "Pascal.ceil(3.141592,3) === 3.142 : 소수점 셋째자리에서 올림");	
});

test('소수점 넷째자리 까지 표현',function() {
	var rn = Pascal.ceil(3.141592,4);
	deepEqual(rn, 3.1416, "Pascal.ceil(3.141592,4) === 3.1416 : 소수점 넷째자리에서 올림");	
});

test('올림 대상으로 문자열을 사용',function() {
	var rn = Pascal.ceil('hello world');
	deepEqual(rn, NaN, "Pascal.ceil('hello world') === NaN");	
});

test('올림 대상으로 숫자형 문자를 사용',function() {
	var rn = Pascal.ceil('003.141592');
	deepEqual(rn, 4 , "Pascal.ceil('003.141592') === 4");	
});

test('표현할 자리수를 문자를 사용하여 넘겼을 경우',function() {
	var rn = Pascal.ceil(3.141592,'hello');
	deepEqual(rn, 4 , "Pascal.ceil(3.141592,'hello') === 4");	
});