## 영화 검색

바닐라 자바스크립트를 통한 [영화검색 사이트](https://movie-vanila-javascript.vercel.app/) 구현

## 팀구성

|                                                                           유준호                                                                           |                                                                           박희연                                                                            |                                                                           김채현                                                                            |                                                                        전해강                                                                         |                                                                           김선익                                                                            |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/jeonhaekang/movie_vanila_javascript/assets/73621658/ba2e363c-83d8-4d71-99ac-1cdc188a2962" alt="프로필 이미지" width="200px"/> | <img src="https://github.com/jeonhaekang/movie_vanila_javascript/assets/73621658/bd379755-661f-4b06-a3eb-89aec4a1c377" alt="프로필 이미지" width="200px" /> | <img src="https://github.com/jeonhaekang/movie_vanila_javascript/assets/73621658/74b31e6d-93b9-49a6-9e0a-95f2e63224d2" alt="프로필 이미지" width="200px" /> | <img src="https://user-images.githubusercontent.com/73621658/161737028-01579377-e7e5-4da6-8e7e-87ba5f820b0a.png" alt="프로필 이미지" width="200px" /> | <img src="https://github.com/jeonhaekang/movie_vanila_javascript/assets/73621658/243d9d33-f39f-4aef-9381-34261ee30c3d" alt="프로필 이미지" width="200px" /> |
|                                                                        `Front-end`                                                                         |                                                                         `Front-end`                                                                         |                                                                         `Front-end`                                                                         |                                                                      `Front-end`                                                                      |                                                                         `Front-end`                                                                         |

## 커밋 컨벤션

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 변경
- style : 코드 포맷팅 등 스타일 관련 변경
- refactor : 코드 리팩토링
- chore : 설정 변경 등의 기타 변경사항

## 코드 컨벤션

### 함수

함수명은 카멜 케이스(camelCase)를 원칙으로 한다.

```javascript
function nameOfFunction() {
  // ...some logic
}
```

### 변수명

상수는 모두 대문자로 쓰며 띄어쓰기는 \_로 처리하며, 객체타입의 경우 카멜 케이스를 적용한다.

```javascript
const SOME_VALUE = 1;

const people = {
  name: "김자바",
  age: "26"
};
```

### 클래스명

클래스명은 케밥 케이스(kebab-case)를 원칙으로 한다.

```html
<h1 class="movie-title">영화검색 사이트</h1>
```

### 스타일 코드 순서

스타일 코드의 순서는 아래와 같이 작성한다.

```css
.sample {
  /* position 관련 */
  position: absolute;
  top: 0;
  left: 0;

  /* display 관련 */
  display: flex;
  justify-content: center;
  align-items: center;

  /* size 관련 */
  width: auto;
  height: auto;

  /* margin, padding */
  margin: 0 auto;
  padding: 12px;

  /* background 관련 */
  background-color: #ffffff;

  /* border 관련 */
  border: 1px solid #ffffff;
  border-radius: 12px;

  /* font 관련 */
  font-size: 24px;
  font-weight: 700;
  text-align: center;

  /* animation 관련 */
  transform: translate(10px, 100%);
  transition: 300ms;
}
```
