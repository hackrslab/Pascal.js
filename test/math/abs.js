module('절대값(abs) 테스트')

test('numberic 절대값 테스' , function() {
	deepEqual(Pascal.abs(1), 1 ,'양의 정수 1의 절대값 테스트');
	deepEqual(Pascal.abs(-1), 1 ,'음의 정수 1의 절대값 테스트');
	deepEqual(Pascal.abs(-1.3), 1.3 ,'음의 실수 1.3의 절대값 테스트');
});