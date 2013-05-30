module('log test');

test('자연 로그 테스트',function(){
  deepEqual(Pascal.log(1),0,'Pascal.log(1)===0');
  deepEqual(Pascal.log(2),0.6931471805599453,'Pascal.log(2)===0.6931471805599453');
  deepEqual(Pascal.log(3),1.0986122886681097,'Pascal.log(3)===1.0986122886681097');
  deepEqual(Pascal.log(4),1.3862943611198905,'Pascal.log(4)===1.3862943611198905');
});


test('상용 로그 테스트',function(){
  deepEqual(Pascal.log(1,10),0,'Pascal.log(1,10)===0');
  deepEqual(Pascal.log(2,10),0.30102999566398114,'Pascal.log(2,10)===0.30102999566398114');
  deepEqual(Pascal.log(3,10),0.47712125471966243,'Pascal.log(3,10)===0.47712125471966243');
  deepEqual(Pascal.log(4,10),0.6020599913279623,'Pascal.log(4,10)===0.6020599913279623');
});

test('밑수가 2 로그 테스트',function(){
  deepEqual(Pascal.log(1, 2),0,'Pascal.log(1, 2)===0');
  deepEqual(Pascal.log(2, 2),1,'Pascal.log(2, 2)===1');
  deepEqual(Pascal.log(3, 2),1.5849625007211563,'Pascal.log(3, 2)===1.5849625007211563');
  deepEqual(Pascal.log(4, 2),2,'Pascal.log(4, 2)===2');
});

test('배열의 로그 처리 테스트 ',function(){
  var array = [1,2,3,4];
  deepEqual(Pascal.log(array, 2),[0,1,1.5849625007211563,2],'Pascal.log(array, 2)===0');
});