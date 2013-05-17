# Pascal
Pascal.js 는 Javascript 내장객체인 Math Object 에서 지원하지 않는 수학,통계,수치, 물리적 계산등의 데이터를 다룰때 필요한 모듈 입니다.
차트,Canvas,통계,Vector  등과 같이 수치 계산이 빈번히 일어나는 작업을 할때 유용히 사용하실 수 있습니다.
현재 배포 버전이 아닌 개발버전을 먼저 올려 두었습니다. 자세한 API 가 없는 관계로 `test` 를 참고 하시기 바랍니다.

## 모듈 
Pascal 는 기본적으로  `module`에 포함되어 지거나 `Global Scope`의 `Pascal` 네임스페이스만을 사용합니다.

```javascript
if(typeof exports !== 'undefined') {
  if(typeof module !== 'undefined' && moduel.exports) {
     exports = module.exports = Pascal;  
  }
  exports.Pascal = Pascal;
} else {
root.Pascal = Pascal; 
}
```

## Install

이후 ninjacamp.org 를 통하여 다운로드 링크를 지원할 예정입니다. 

* 테스트가 포함된 저장소 전체를 원하는 경우.

```
https://github.com/insanehong/Pascal.js
```

Or

```
git clone git://github.com/insanehong/Pascal.js.git
```

## Unit Test
[test Page](http://insanehong.kr/Pascal.js/test/index.html)

## API Reference
[한국어](https://github.com/insanehong/Pascal.js/doc/ko/API.md)

# for Contributors
Pascal.js 는 오픈소스 라이브러리로 누구나 함께 참여하 실수 있습니다. 
참여 방법은 test 디렉토리에 수정 혹은 추가 한 메소드에 대한 테스트 코드를 작성하고 test/index.html 에 추가된 테스트 코드를 삽입 합니다. 
웹 단위 테스트 페이지에서 오류가 없음을 확인 하신후 Pull Request 날려주시면 됩니다. 

혹은 저와 같이 개발에 같이 참여하시고 싶으 신분은 언제든 트위터  : [@insanehong](https://twitter.com) 혹은 insanehong@gmail.com 으로 연락주시기 바랍니다.

## LiCENSE
The MIT License

Copyright (c) 2013 The Pascal.js Authors 

See the LICENSE file for details.
어