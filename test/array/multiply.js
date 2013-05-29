module('multiply 테스트');

test('구구단 2단 구하기',function() {
	var a = [1,2,3,4,5,6,7,8,9]
			, testResult = Pascal.multiply(a,2);
			
	deepEqual(testResult , [2,4,6,8,10,12,14,16,18],'구구단 2단 구하기:[2,4,6,8,10,12,14,16,18]');		
});

test('양의 정수로 구성된 배열 음수로 변환',function(){
	var a = [1,2,3,4,5,6,7,8,9]
			, testResult = Pascal.multiply(a,-1);

	deepEqual(testResult , [-1,-2,-3,-4,-5,-6,-7,-8,-9],'배열 음수로 만들기');	
});

