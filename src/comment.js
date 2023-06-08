//comment profile img
const randomNumber = () => {
  var num = Math.floor(Math.random() * 4) + 1;
  return num;
};

const saveComment = () => {
  let userId = document.querySelector("#password").value;
  let userName = document.querySelector("#name").value;
  let userPassword = document.querySelector("#password").value;
  let userComment = document.querySelector("#comment").value;

  localStorage.setItem(
    `${userId}`,
    JSON.stringify({
      name: userName,
      password: userPassword,
      comment: userComment
    })
  );
};
/*
  ## localStorage 사용시 주의사항
  1. 오직 문자형(string) 데이터 타입만 지원한다.
  2. 숫자형 또는 객체형 데이터를 저장하려고 할 때 저장이 되지 않을 수 있다.

  ## 해결방법
  1. 데이터를 JSON 형태로 주고 받으면 된다. JSON.stringify, JSON.parse 사용 
  
  출처 : https://www.daleseo.com/js-web-storage/#%EA%B8%B0%EB%B3%B8-api
*/

const drawCommentList = () => {
  const commentTitle = document.querySelector(".comment-tit");
  commentTitle.innerHTML = `
      <h3 class="guest-tit">후기</h3>
      <span class="badge-num" >2</span>  
  `;

  const commentElement = document.querySelector(".guest-comment-list");
  commentElement.innerHTML = `
      <div class="card" id="">
        <div class="card-body">
          <div class="user-profile">
            <img src="./assets/user_comment_profile${randomNumber()}.svg">
          </div>
          <div class="user-comment-wrap">
            <div class="user-tit">
              <p id="user-name">
              김선익
              <span class="date">Apr 29. 2023</span>
              </p>
              
              <div class="card-btn">
                <button type="button" class="btn-update-comment">수정</button>
                <button type="button" class="btn-delete-comment">삭제</button>
              </div>
            </div>
                <p id="user-comment">영화 재밌어요 추천합니다 :)</p>
          </div>
        </div>
      </div>
  `;
};

drawCommentList();
