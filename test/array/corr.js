module('상관계수 테스트');

test('상관계수 계산 값 검증.',function(){
	var a = [1, 2, 3, 4, 5],
			b = [7, 5, 3, 1, -1];
			result = Pascal.corr(a,b);

	deepEqual(result, -0.9999999999999998, 'Pascal.corr([1, 2, 3, 4, 5],[7, 5, 3, 1, -1]) == -0.9999999999999998');
});


test('상관계수는 -1  <= x >=1 사이에 존재해야 함.',function(){
	var a = [12, 21, 16, 14, 18,16],
			b = [22, 45, 37, 30, 28,36 ],
			result = Pascal.corr(a, b);
			console.log(result);
	var t = (-1  <= result && 1  >= result) ? true : false;
	ok(t === true , 'passed!');
});



