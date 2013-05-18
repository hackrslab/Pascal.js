module('minmax test');

test('숫자값을 가진 순차 배열의 min, max 구하기',function() {
	var array = [1,2,3,4,5,6,7,8,9,10];
	var result  = Pascal.minmax(array);
	deepEqual(result,[1,10],"Pascal.minmax([1,2,3,4,5,6,7,8,9,10]) === [1,10]");
});

test('숫자값을 가진 순서없는 배열의 min, max 구하기',function() {
	var array = [5,3,1,3,9,2,0];
	var result  = Pascal.minmax(array);
	deepEqual(result,[0,9],"Pascal.minmax([5,3,1,3,9,2,0]) === [0,9]");
});

test('숫자와 숫자형 문자열을 가진 배열의 min, max 구하기',function() {
	var array = [1,2,3,4,5,'6',7,8,9,'0000010'];
	var result  = Pascal.minmax(array);
	deepEqual(result,[1,10],"[1,2,3,4,5,'6',7,8,9,'0000010']) === [1,10]");
});


test('숫자와 문자열을 가진 배열의 min, max 구하기',function() {
	var array = [1,2,3,4,5,6,'word 7',8,9,'hello 10'];
	var result  = Pascal.minmax(array);
	deepEqual(result,[1,9]," Pascal.minmax([1,2,3,4,5,6,'word 7',8,9,'hello 10']) === [1,9]");
});