# Array 데이터 다루기
Pascal.js 에는 Array 데이터를 다루기 위한 많은 기능을 지원하고 있습니다. Pascal.js Array 관련 모든 메소드는 내부적으로 배열안의 숫자(혹은 숫자형 문자열)만을 처리하기 때문에  숫자(혹은 숫자형 문자열) 값을 가진 배열을 사용하여야 합니다. 
숫자(혹은 숫자형 문자열)를 제외한 값은 처리과정에서 제외한 나머지 데이터만 처리하게 되게 됩니다. 

```javascript
var array = [1,2,3,4,5,6,'8','009','hello','world'];

/* replace in Pascal.js */
var array = [1,2,3,4,5,6,8,9]; 
```

인자 값으로 `fn` 을 받는 메소드의 경우 기능 처리 이전에 fn.call() 이 수행되며 그에 따라 처리되는 배열이 제구성 되어 집니다. 
fn 는 첫번번째 인자로 배열값, 두번째 인자로 해당 값의 배열 인덱스를 사용 합니다. 
예를 들어 배열의 짝수번째 값들의 총 합을 구하려고 한다면 아래의 코드와 같이 구현하실수 있습니다.

```javascript
var array = [1,2,3,4,5,6,7,8,9,10];

var fn = function(n,i) {	
	if(i%2==1) return n;
}

Pascal.sum(array,fn);
> 
``` 

## Array 관련 API

* sum
* mean
* max
* min
* minmax
* quantile
* quartile
* stdev
* sum
* variance

## Pascal.sum(array,fn) 
array 로 넘어온 배열의 구성 값중 숫자형 데이터들의 총 합을 구합니다. 두번째 인자로 배열 재구성을 위한 함수를 넘길 수 있습니다. 
함수 첫번째 인자로는 배열의 구성값, 두번째 인자로는 배열내 인덱스 값을 사용합니다. 

```javascript
var array = [1,2,3,4,5,6,7,8,9,10]; 
Pascal.sum(array);
> 55

var var array = [1,2,3,4,5,6,7,8,9,10]; 
Pascal.sum(array, funtion(n) { return n * 10;});
> 550;
```
## Pascal.mean(array,fn) 
array 로 넘어온 배열의 구성 값중 숫자형 데이터들의 평균을 구합니다. 두번째 인자로 배열 재구성을 위한 함수를 넘길 수 있습니다. 
함수 첫번째 인자로는 배열의 구성값, 두번째 인자로는 배열내 인덱스 값을 사용합니다. 

```javascript
var array = [1,2,3,4,5,6,7,8,9,10]; 
Pascal.mean(array);
> 5.5

var var array = [1,2,3,4,5,6,7,8,9,10]; 
Pascal.mean(array, funtion(n) { return n * 10;});
> 55;
```


