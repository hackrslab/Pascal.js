module( "sum test" );
test('배열 합계 테스트',function() {
	var total = Pascal.sum([1,2,3,4,5,6,7,8,9,10]);
	var diff = 1+2+3+4+5+6+7+8+9+10;
	deepEqual(diff, 55, "1+2+3+4+5+6+7+8+9+10 === 55");
	deepEqual(total, 55, "Pascal.sum([1,2,3,4,5,6,7,8,9,10] === 55");	
});

test('NaN 값이 포함된 배열 합계',function() {
	var total = Pascal.sum([1,2,3,4,5,6,7,8,9,'hello world']);
	var diff = 1+2+3+4+5+6+7+8+9;
	deepEqual(diff, 45, "1+2+3+4+5+6+7+8+9 === 45");
	deepEqual(total, 45, "Pascal.sum([1,2,3,4,5,6,7,8,9,'hello world'] === 45");	
});

test('숫자형 문자열이 포함된 배열 합계 테스트',function() {
	var total = Pascal.sum(['1',2,'3',4,'5',6,7,8,9,'10']);
	var diff = 1+2+3+4+5+6+7+8+9+10;
	deepEqual(diff, 55, "1+2+3+4+5+6+7+8+9+10 === 55");
	deepEqual(total, 55, "Pascal.sum(['1',2,'3',4,'5',6,7,8,9,'10'] === 55");	
});

test('callback function 테스트',function() {
	var total = Pascal.sum([1,2,3],function(n){ return n+1; });
	var diff = (1+1)+(2+1)+(3+1);
	deepEqual(diff, 9, "(1+1)+(2+1)+(3+1) === 9");
	deepEqual(total, 9, "Pascal.sum([1,2,3],function(n){ return n+1; } === 9");	
});

test('홀수 번째 값들의 합',function() {
	var total = Pascal.sum([1,2,3,4,5,6,7,8,9],function(n,i){ if(i%2==0) return n; });
	var diff = 1+3+5+7+9;
	deepEqual(diff, 25, "1+3+5+7+9+ === 25");
	deepEqual(total, 25, "Pascal.sum([1,2,3,4,5,6,7,8,9],function(n,i){ if(i%2==0) return n; }) === 25");	
});