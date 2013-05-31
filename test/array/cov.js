module('공분산 테스트');

test('공분산 계산식 검증',function() {
	var a = [1, 2, 3, 4, 5]
			,b = [7, 5, 3, 1, -1 ]
			,result = Pascal.cov(a, b);
		 	
	
	deepEqual(result, -4, 'Pascal.cov([1, 2, 3, 4, 5], [7, 5, 3, 1, -1 ])==== -4');
});

test('공분산 성질 1 .Cov(X, Y) = Cov(Y, X)',function() {
	var a = [1, 2, 3, 4, 5]
			,b = [7, 5, 3, 1, -1 ]
			,result = Pascal.cov(a, b)
		 	,reverseResutl = Pascal.cov(b, a);
	
	deepEqual(result, reverseResutl, 'passed!');
});

test('공분산 성질 2 .Cov(X, X) = Var(X)',function() {
	var a = [1, 2, 3, 4, 5]
			,result = Pascal.cov(a,a)
		 	,varResutl = Pascal.variance(a);
	
	deepEqual(result, varResutl, 'passed!');
});

test('공분산 성질 3 .Cov(aX, bY) = abCov(Y, X)',function() {
	var multiX = 5
			,multiY = 3
			,a = [1, 2, 3, 4, 5]
			,b = [7, 5, 3, 1, -1];

	var multiA = Pascal.multiply(a,multiX)
			, multiB = Pascal.multiply(b,multiY);

	var resutl = Pascal.cov(multiA,multiB)
			, resutl2 = (multiX * multiY) * Pascal.cov(a,b)							
			
	deepEqual(resutl, resutl2, 'passed!');
});