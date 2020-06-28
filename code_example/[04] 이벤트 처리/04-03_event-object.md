# 이벤트 객체

Vue.js의 이벤트 객체는 W3C 표준 HTML DOM Event 모델을 그대로 따르면서 추가적인 속성을 제공한다. 그러므로 기존의 순수 자바스크립트에서 사용하던 이벤트 객체의 정보를 그대로 사용할 수 있다.

> ## 이벤트 객체의 주요 공통 속성

- `target` : 이벤트가 발생항 HTML 요소를 리턴함.

- `currentTarget` : 이벤트 리스터가 이벤트를 발생시키는 HTML 요소를 리턴함.

- `path` : 배열값, 이벤트 발생 HTML 요소로부터 document, window 객채로까지 거슬러 올라가는 경로를 나타냄.

- `bubbles` : 현재의 이벤트가 버블링을 일으키는 이벤트인지 여부를 리턴함.

- `cancleable` : 기본 이벤트를 방지할 수 있는지 여부를 리턴함.

- `defaultPrevented` : 기본 이벤트가 방지되었는지 여부를 나타냄.

- `eventPhase` : 이벤트 흐름의 단계를 나타냄.  
  1 : 포착(CAPTURE_PHASE)  
  2 : 이벤트 발생(AT_TARGET)  
  3 : 버블링(BUBBLING)

- `srcElement` : IE에서 사용되던 속성으로 target과 동일한 속성.

> ## 키보드 이벤트 관련 속성

- `altKey` : ALT 키가 눌러졌는지 여부를 나타냄(true/false).

- `shiftKey` : SHIFT 키가 눌러졌는지 여부를 나타냄(true/false).

- `ctrlKey` : CTRL 키가 눌러졌는지 여부를 나타냄(true/false).

- `metaKey` : 메타키가 눌러졌는지 여부를 나타냄(true/false). 윈도우에선 Window Key, macOs에서는 Command Key

- `key` : 이벤트에 의해 나타나는 키의 갓을 리턴함. (대소문자 구분함)

- `code` : 이벤트를 발생시킨 키의 코드값을 리턴함.  
  ex) a를 눌렀을 때 'KeyA'를 리턴함.  
  ex) Shift 키를 눌렀을 때 'Shift'를 리턴함.

- `KeyCode` : 이벤트를 발생시킨 키보드의 고유 키보드  
  ex) a, A는 65를 리턴함. (대소문자 구분하지 않음)

- `charCode` : keypress 이벤트가 발생될 때 Unicode 캐릭터 코드를 리턴함.

- `location` : 디바이스에서의 키 위칫값. 일반 키보드는 이 값이 모두 0이므로 이용할 수 없음.

> ## 마우스 이벤트 관련 속성

- `altKey, shiftKey, ctrlKey, metaKey` : 키보드 이벤트 관련 속성 참조

- `button` : 이벤트를 발생시킨 마우스 버튼  
  0 : 마우스 왼쪽 버튼  
  1 : 마우스 휠  
  2 : 마우스 오른쪽 버튼

- `buttons` : 마우스 이벤트가 발생한 후에 눌러져 있는 마우스 버튼의 값의 합을 리턴함.  
  1 : 마우스 왼쪽 버튼  
  2 : 마우스 오른쪽 버튼  
  4 : 마우스 휠  
  8 : 4번째 마우스 버튼  
  16 : 5번째 마우스 버튼  
  ex) 마우스의 오른쪽 버튼, 휠을 누르고 있는 상태에서 왼쪽 버튼을 클릭할 경우 이 값은 6을 리턴함.

- `clientX, clientY` : 마우스 이벤트가 일어났을 때 뷰포트(ViewPort) 영역상 좌표. 이 좌표는
  스크롤을 내리더라도 좌푯값에 영향을 안끼침

- `layerX, layerY` : 마우스 이벤트가 발생한 HTML 요소 영역상에서 좌표(IE이외의 브라우저 사용)

- `offsetX, offsetY` : 마우스 이벤트가 발생항 HTML 요소 영역상에서의 좌표(IE 브라우저 사용)

- `pageX, pageY` : 마우스 이벤트가 일어났을 때의 HTML 문서(Document) 영역상의 좌표

- `screenX, screenY` : 마우스 이벤트가 일어났을 때의 모니터 화면(Screen) 영역상의 좌표

> ## 이벤트 객체의 주요 메서드

- `preventDefault()` : 기본 이벤트의 자동 실행을 중단시킴

- `stopPropagation()` : 이벤트 전파를 막음 (capturing, bubbling을 막을때 유용)

위 이벤트 객체의 속성들을 자주 사용되는 것들만 골라서 구성되어 있다.
