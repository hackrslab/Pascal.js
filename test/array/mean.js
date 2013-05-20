module( "avg test" );
test('배열 평균 테스트',function(){
	var average = Pascal.avg([1,2,3,4,5,6,7,8,9,10]),
			diff = (1+2+3+4+5+6+7+8+9+10)/10;

	deepEqual(diff, 5.5, "(1+2+3+4+5+6+7+8+9+10)/10 === 5.5");
	deepEqual(average, 5.5, "Pascal.avg([1,2,3,4,5,6,7,8,9,10]) === 5.5");	
});


test('문자열이 포함된 배열 평균 테스트',function(){
	var average = Pascal.avg([1,2,3,4,5,6,7,8,9,10,'hello world']),
			diff = (1+2+3+4+5+6+7+8+9+10)/10;
	
	deepEqual(diff, 5.5, "(1+2+3+4+5+6+7+8+9+10)/10 === 5.5");
	deepEqual(average, 5.5, "Pascal.avg([1,2,3,4,5,6,7,8,9,10,'hello world']) === 5.5");	
});

test('숫자형 문자열이 포함된 배열 평균 테스트',function(){
	var average = Pascal.avg([1,2,'3',4,5,'6',7,'8',9,10,'hello world']),
			diff = (1+2+3+4+5+6+7+8+9+10)/10;
	
	deepEqual(diff, 5.5, "(1+2+3+4+5+6+7+8+9+10)/10 === 5.5");
	deepEqual(average, 5.5, "Pascal.avg([1,2,'3',4,5,'6',7,'8',9,10,'hello world']) === 5.5");	
});

test('넘겨받은 배열값의 홀수번째수의 평규',function(){
	var average = Pascal.avg([1,2,3,4,5,6,7,8,9],function(n,i){ if(i%2==0) return n; });
			diff = (1+3+5+7+9)/5;
	
	deepEqual(diff, 5, "(1+3+5+7+9)/5 === 5");
	deepEqual(average, 5, "Pascal.avg([1,2,3,4,5,6,7,8,9],function(n,i){ if(i%2==0) return n; }) === 5");	
});