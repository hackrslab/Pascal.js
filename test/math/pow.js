module('거듭제곱(pow) 테스트')

test('numberic 거듭제곱 테스트' , function() {
	deepEqual(Pascal.pow(10,2), 100 ,'10의 2제곱값2 테스트');
	deepEqual(Pascal.pow(2,10), 1024 ,'2의 10 제곱값 테스트');
});