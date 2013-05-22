# API Reference
Pascal.js 는 Array, Number, Json 등의 데이터를 다룰 예정이며 현재는 Array와 Number 타입의 데이터만 지원하고 있습니다. 
Json 데이터의 경우 `0.2.0` Version 에서 추가할 예정입니다.  

## API for Array 
배열 데이터를 처리하는 API 입니다. 배열안에 존재하는 `Number type` 데이터를 처리 합니다. `isNaN` 데이터의 경우 처리 대상에서 제외 됩니다. 

* add(array,n) : 배열 데이터값에 n 이 더해진 배열을 반환한다. 반환시 숫자형 데이터외의 데이터는 버려진다.
* sum(array[,fn]) : 배열 데이터의 총 합을 뱐환 합니다. 배열 재구성 처리를 위햔 함수를 넘길수 있습니다. 
* mean(array[,fn]) : 배열 데이터의 평균 값을 반환 합니다. 배열 재구성 처리를 위햔 함수를 넘길수 있습니다. 
* variance(array[,fn]) : 배열 데이터의 분산 값을 반환 합니다. 배열 재구성 처리를 위햔 함수를 넘길수 있습니다. 
* stdev(array[,fn]) : 배열 데이터의 표준편차를 반환 합니다. 배열 재구성 처리를 위햔 함수를 넘길수 있습니다. 
* quantile(array,p[,fn]) : 배열 데이터의 분위수를 구한다. 구하려는 구간을 백분위수로 넘겨야 한다. 배열 재구성 처리를 위햔 함수를 넘길수 있습니다. 
* quartile(array[,fn]) : 배열 데이터의 사분위수 정보를 담은 배열을 반환한다. 구하려는 구간을 백분위수로 넘겨야 한다. 배열 재구성 처리를 위햔 함수를 넘길수 있습니다.
* median(array[,fn]) : 배열 데이터의 중앙값을 반환 합니다. 배열 재구성 처리를 위햔 함수를 넘길수 있습니다. 
* min(array[,fn]) : 배열 데이터의 최소값을 반환 합니다. 배열 재구성 처리를 위햔 함수를 넘길수 있습니다. 
* max(array[,fn]) : 배열 데이터의 최대 값을 반환 합니다. 배열 재구성 처리를 위햔 함수를 넘길수 있습니다. 
* minmax(array[,fn]) : 배열 데이터의 최소,최대 값을 가진 배열을 반환 합니다. 배열 재구성 처리를 위햔 함수를 넘길수 있습니다. 

## API for Number
기본적인 단일 수치에 대한 처리를 지원하는 API 입니다. `Math Object` 에서 지원하는 기본 method 와 동일한 기능을 수행하는 API가 포함되어 져 있습니다. 

* abs(n) = Math.abs(n) 결과를 반환합니다. 
* pow(n,exp) = Math.pow(n,exp) 결과를 반환합니다. 
* acos = Math.acos(n) 결과를 반환합니다. 
* cos = Math.cos(n) 결과를 반환합니다. 
* sin = Math.sin(n) 결과를 반환합니다. 
* tan = Math.tan(n) 결과를 반환합니다. 
* sqrt = Math.sqrt(n) 결과를 반환합니다. 
* exp = Math.exp(n) 결과를 반환합니다. 
* log(a[,b]) : a 자연로그 값을 반환합니다. 양의 실수 b 를 넘길 경우 b를 밑수로 하는 로그 값을 반환 합니다.
* log10(a) : 밑수가 10인 상용로그 값을 반환 합니다. 내부적으로 Pascal.og(a,10) 와 동일하게 작동합니다.; 
* log2(a) : 밑수가 2인 로그 값을 반환 합니다. 내부적으로 Pascal.og(a,2) 와 동일하게 작동합니다.; 
* round(n[,digits]) : 소수점 반올림 값을 반환 합니다. digits+1 자릿수에서 반올림되어 집니다.
* ceil(n[,digits]) : 소수점 올림 값을 반환 합니다. digits+1 자릿수에서 올림되어 집니다.
* floor(n[,digits]) : 소수점 버림 값을 반환 합니다. digits+1 자릿수에서 버림되어 집니다.
* gamma(z) : gamma 값을 반환 합니다.  
* beta(a,b) : B(x,y) = Γ(x)Γ(y)/Γ(x+y) 을 이용하여 beta 함수 결과를 반환 합니다.  
* fact(n) : gamma(z+1) == n! 을 이용하여 factorial 을 계산하여 반환 합니다. 
* perm(n,r) : nPr의 순열 값을 반환 합니다. 단 현재는 parseInt 로 처리 가능한 수치만을 반환합니다. 

## 추가 예정인 API

최빈값, 비율 계산, 삼각함수등의 API 등이 추가될 예정이며 현재 진행 중입니다. 
관심있으신분들은 언제든 @insanehong, 또는 github issue 에 등록해 주시거나 PR 날려주시기 바랍니다. 


## LiCENSE
The MIT License

Copyright (c) 2013 The Pascal.js Authors

See the LICENSE file for details.
