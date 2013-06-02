module('로그 함수(log) 테스트');

test('자연로그 범위 테스트',function(){
  deepEqual(Pascal.log(1),0,'Pascal.log(1)===0');
  deepEqual(Pascal.log(0),-Infinity,'Pascal.log(0)===-Infinity');
  deepEqual(Pascal.log(-1),NaN,'Pascal.log(3)===NaN');
});

test('밑수지정 로그 테스트',function(){
  deepEqual(Pascal.log(1, 1),0,'Pascal.log(1, 1)===0');
  deepEqual(Pascal.log(2, 10),0.30102999566398114,'Pascal.log(2, 10)===0.30102999566398114');
  deepEqual(Pascal.log(3, 2),1.5849625007211563,'Pascal.log(3, 2)===1.5849625007211563');
  deepEqual(Pascal.log10(2) , Pascal.log(2, 10), 'Pascal.log10(2) === Pascal.log(2, 10)');
  deepEqual(Pascal.log2(3) , Pascal.log(3, 2), 'Pascal.log2(3) === Pascal.log(3, 2)');
});