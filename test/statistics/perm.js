module('perm test');

test('순열 테스트 5P1',function() {
	var tn = 5;
	var pn = Pascal.perm(5,1);
	deepEqual(tn, 5, "5P1 = 5 === 5 ");	
	deepEqual(pn, 5, "Pascol.perm(5) === 5 ");	
});

test('순열 테스트 5P2',function() {
	var tn = 5*4;
	var pn = Pascal.perm(5,2);
	deepEqual(tn, 20, "5P2 = 5*4 === 20 ");	
	deepEqual(pn, 20, "Pascol.perm(5,2) === 20 ");	
});

test('r 값이 n 보다 더 큰 순열 테스트 5P6',function() {
	var tn = 5*4*3*2*1;
	var pn = Pascal.perm(5,6);
	deepEqual(tn, 120, "5P6 =>5P5 5*4*3*2*1 === 120 ");	
	deepEqual(pn, 120, "Pascol.perm(5,2) === 120 ");	
});