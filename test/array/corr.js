module('상관계수 테스트');

test('상관계수 계산 값 검증.',function(){
	var a = [0,1,1,2,3,5,8,13,21,34];

	var b = Pascal.add(a,1);
			//b = Pascal.log(Pascal.add(a,1));
			//r = Pascal.corr(a, b);

	console.log(b);	
	//console.log(Pascal.stdev(a));
	//console.log(Pascal.stdev(b));
	//console.log(Pascal.covar(a,b));	

	//deepEqual(r,0.795, 'passed!');
});


test('상관계수는 -1  <= x >=1 사이에 존재해야 함.',function(){
	var a = [12, 21, 16, 14, 18,16],
			b = [22, 45, 37, 30, 28,36 ],
			result = Pascal.corr(a, b);
	var t = (-1  <= result && 1  >= result) ? true : false;
	ok(t === true , 'passed!');
});

