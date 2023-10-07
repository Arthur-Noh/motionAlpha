module.exports = {
  // 테스트 및 검증 완료 부분
  singleQuote: true, // "data" => 'data'로 통일해준다.
  tabWidth: 4, // 저장 시 tab 간격을 2로 통일하여 정렬해준다.
  semi: true, // 코드가 끝날떄 ; 표시를 자동으로 추가해준다.
  printWidth: 150, // 저장 시 지정한 너비값이하로 코드를 재정렬해준다. (주석 내용은 제외인듯)
  quoteProps: 'consistent', // consistent 또는 as-needed : 먼 차이인지.....
  bracketSpacing: true, // {foo:bar} => { foo: bar }로 {}와 속성간에 거리 벌려준다.
  bracketLine: false, // default 값 false, <> 태그안에 내용이 있을시 > 태그를 한줄 내려준다.
  trailingComma: 'es5', // none 또는 es5 또는 all, 설명 그림 참조
  arrowParens: 'avoid', // (x)=>x 의 함수 형태를 x=>x 로 바꿔준다.

  // 공부를 했는데도 모르겠다.
  useTabs: false, // 띄어쓰기 대신 탭을 사용한다.
  parser: 'typescript', // 사용할 parser를 지정, 자동으로 지정됨

  // 미확인 부분
};
