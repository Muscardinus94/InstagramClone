const loginButton = document.querySelector('button');
const inputId = document.querySelector('input[type=text]');
const inputPw = document.querySelector('input[type=password]');

function checkButtonActive() {
  if(inputId.value && inputPw.value) loginButton.className = "active";
  else loginButton.className = "";
}

function checkValidation() {
  // let flag = false;
  // let regexp = /[A-E]/gi;
  // if((inputId.value.length === 11 || inputId.value.includes('@')) && inputPw.value.length>=5) flag = true;
  // if(inputId.value.length !== 11 && !inputId.value.match(regexp)) alert("유효하지 않은 전화번호입니다");
  // else if(!inputId.value.includes('@')) alert("잘못된 이메일 형식입니다");
  // window.location = './main.html';
  if(!inputId.value.includes('@')) alert("잘못된 이메일 형식입니다");
  else if (inputPw.value.length<5) alert("비밀번호는 5글자 이상입니다");
  else window.location = './main.html';
}

function enterSubmit(e) {
  if(e.keyCode === 13) {
    if(!e.target.value) return;
    e.preventDefault;
    e.target.parentNode.children[2].click();
  }
}

loginButton.addEventListener('click', checkValidation);
inputId.addEventListener('keyup', enterSubmit);
inputPw.addEventListener('keyup', enterSubmit);