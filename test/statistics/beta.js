module('beta 함수 test');


test('beta 값 검증 B(x,y) = B(y,x)',function() {
  deepEqual( Pascal.beta(4,10) ,Pascal.beta(10,4) ,"Pascal.beta(4,10) === Pascal.beta(10,4)");
});

test('beta 값 검증 B(x,y) = Γ(x)Γ(y)/Γ(x+y)',function() {
  deepEqual( Pascal.beta(4,10) ,Pascal.gamma(4)*Pascal.gamma(10)/Pascal.gamma(10+4) ,"Pascal.beta(4,10) === Pascal.gamma(4)*Pascal.gamma(10)/Pascal.gamma(10+4)");
});