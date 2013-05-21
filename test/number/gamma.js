module('gamma test');

test('gamma 검증 Γ(n)=(n−1)!',function() {
  var f = Pascal.fact(10);
  deepEqual( Pascal.gamma(11) ,f ,"10! === Pascal.gamma(10+1)");
});

test('gamma 검증 Γ(α+1)=αΓ(α)',function() {
  deepEqual( 10 * Pascal.gamma(10) ,Pascal.gamma(11) ,"10 * Pascal.gamma(10) === Pascal.gamma(11)");
});

test('gamma 검증 Γ(1)=1',function() {
  deepEqual( Pascal.gamma(1) , 1 ,"Pascal.gamma(1) === 1");
});

test('gamma 검증 Γ(4)=6',function() {
  deepEqual( Pascal.gamma(4) , 6 ,"Pascal.gamma(4) === 6");
});

test('gamma 검증 Γ(1/2)=π−√',function() {
  deepEqual( Pascal.gamma(0.5) , Pascal.sqrt(Pascal.PI) ,"Pascal.gamma(0.5) === Pascal.sqrt(Pascal.PI)");
});