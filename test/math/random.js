module('random 테스트');

test('1~100까지의 양의 정수 중 random 추출',function() {
  var ran = Pascal.random(1,100);
  var result = (ran >= 1 && ran <= 100 ) ? true : false;
  ok(result===true,'passed!');
});


test('1~5까지의 양의 정수 중 random 추출',function() {
  var ran = Pascal.random(1,5);
  var result = (ran >= 1 && ran <=5 ) ? true : false;
  ok(result===true,'passed!');
});
