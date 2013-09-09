# Pascal
Pascal.js 는 Javascript Build-in Object Math 에서 지원하지 않는 산술계산 및 통계,배열,행렬 계산등의 데이터 처리를 위해 만들어진 라이브러리 입니다.
Pasacl.js은 Browser 에서뿐만 아니라 Server-side 에서도 동작 하도록 설계 되었습니다.
이 라이브러리에서는 UI Level을 지원하지 않습니다. 단 이후 Pascal.ui.js 등을 지원할 계획은 있으며 Pascal.ui.js 를 사용하지 않더라도 
Google Chart, 혹은 d3.js 등을 사용하여 visualization 등을 처리 할수 있도록 데이터 처리 영역을 지원 합니다. 

## Support CommonJS 

```javascript
if(typeof exports !== 'undefined') {
  if(typeof module !== 'undefined' && module.exports) {
     exports = module.exports = Pascal;  
  }
  exports.Pascal = Pascal;
} 
```

## Support AMD

```javascript
if (typeof require !=='undefined' && typeof define !== 'undefined') {
  define(function() { return Pascal; });
} 
```

## Support Moden Broswer 

```javascript
if(typeof window !== 'undefined') {
  root.Pascal = Pascal; 
}
```

## Install

이후 ninjacamp.org 를 통하여 다운로드 링크를 지원할 예정입니다. 

* 테스트가 포함된 저장소 전체를 원하는 경우.

```
https://github.com/hackrslab/Pascal.js
```

Or

```
git clone git://github.com/hackrslab/Pascal.js.git
```

## Unit Test
Unit Test 로는 `Qunit` 을 사용 합니다. 테스트 결과는 아래의 링크에서 확인 하실 수 있습니다.  

[test Page](http://hackrslab.github.io/Pascal.js/test/index.html)

## Document
다국어 문서를 지원할 예정 이지만 현재는 한국어로만 작성되어 있습니다. 하지만 현재 개발된 내용을 모두 담아내고 있지는 못하고 있음을 밝힙니다.
현재까지 작성된 문서내용은 아래 링크에서 확인 하실수 있습니다.

[한국어](https://github.com/insanehong/Pascal.js/tree/master/doc/ko)

# for Contributors
Pascal.js 는 오픈소스 라이브러리로 누구나 함께 참여하 실수 있습니다. 
참여 방법은 test 디렉토리에 수정 혹은 추가 한 메소드에 대한 테스트 코드를 작성하고 test/index.html 에 추가된 테스트 코드를 삽입 합니다. 
웹 단위 테스트 페이지에서 오류가 없음을 확인 하신후 `Pull Request` 하시면 됩니다. 


혹은 저와 같이 개발에 같이 참여하시고 싶으 신분은 언제든 트위터  : [@insanehong](https://twitter.com/insanehong) 혹은 [insanehong@gmail.com](mailto:insanehong@gmail.com) 으로 연락주시기 바랍니다.

## LiCENSE
The MIT License

Copyright (c) 2013 The Pascal.js Authors 

See the LICENSE file for details.
