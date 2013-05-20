module('abs test');

test('양의 정수 절대값 구하기',function() {
  var n1 = 1;
      n2 = 100;
      n3 = 1000;
  
  deepEqual(Pascal.abs(n1), 1, "Pascal.abs(1) === 1");
  deepEqual(Pascal.abs(n2), 100, "Pascal.abs(100) === 100"); 
  deepEqual(Pascal.abs(n3), 1000, "Pascal.abs(1000) === 1000");      

});

test('음의 정수 절대값 구하기',function() {
  var n1 = -1;
      n2 = -100;
      n3 = -1000;
  
  deepEqual(Pascal.abs(n1), 1, "Pascal.abs(1) === 1");
  deepEqual(Pascal.abs(n2), 100, "Pascal.abs(100) === 100"); 
  deepEqual(Pascal.abs(n3), 1000, "Pascal.abs(1000) === 1000");      

});

test('+0 절대값 구하기',function() {
  deepEqual(Pascal.abs(+0), 0, "Pascal.abs(+0) === 0");
});

test('-0 절대값 구하기',function() {
  deepEqual(Pascal.abs(-0), 0, "Pascal.abs(-0) === 0");    

});

test('양의 실수 절대값 구하기',function() {
  var n1 = 3.14;
  deepEqual(Pascal.abs(n1), 3.14, "Pascal.abs(-3.14) === 3.14");
});


test('음의 실수 절대값 구하기',function() {
    var n1 = -3.14;
  deepEqual(Pascal.abs(n1), 3.14, "Pascal.abs(-3.14) === 3.14");

});