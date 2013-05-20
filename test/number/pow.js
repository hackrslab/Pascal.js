module('pow test');

test('0의 3제곱',function() {
  deepEqual(Pascal.pow(0,3), 0, "Pascal.pow(0,3) === 0"); 
});

test('1의 10제곱',function() {
  deepEqual(Pascal.pow(1,10), 1, "Pascal.pow(1,10) === 1"); 
});

test('2의 10제곱',function() {
  deepEqual(Pascal.pow(2,10), 1024, "Pascal.pow(1,10) === 1024"); 
});