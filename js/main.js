// import DATA from "data";
// console.log(DATA);
const PROFILE_DATA = [
  {
    "id": 1,
    "userId": "wecode_bootcamp",
    "name": ">wecode | 위코드",
    "imgUrl": "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=lXGRUtCINKEAX8d_W6p&oh=7a160c2460db3c9c9412569366a998d8&oe=5F8EAD70",
    "linkUrl": "https://www.instagram.com/wecode_bootcamp/"
  },
  {
    "id": 2,
    "userId": "lilyiu_",
    "name": "아이유",
    "imgUrl": "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/28434316_190831908314778_1954023563480530944_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=gjs9jKIkHe8AX8GiOEh&oh=5e60f4ba1177c6f4998031ac8fc20069&oe=5F8DE0E0",
    "linkUrl": "https://www.instagram.com/lilyiu_/"
  },
  {
    "id": 3,
    "userId": "hellobeen",
    "name": "이주빈",
    "imgUrl": "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/20184707_2475441045927839_6341421179915468800_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=0WQJX1apDRYAX9tsje6&oh=320d7b04d195b54ce64ef31e109a0189&oe=5F8E57AF",
    "linkUrl": "https://www.instagram.com/hellobeen/"
  },
  {
    "id": 4,
    "userId": "dlehdgnl",
    "name": "이동휘",
    "imgUrl": "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118298212_307164543714416_1453405827554668420_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=XYXta0WfCLUAX-PjenY&oh=cc021248e441d9447193e267c726c31f&oe=5F8FD47D",
    "linkUrl": "https://www.instagram.com/dlehdgnl/"
  },
  {
    "id": 5,
    "userId": "hongsick",
    "name": "유아인",
    "imgUrl": "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/11906385_125338117812805_923031659_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=NRFxCiTNtikAX_MwmEM&oh=c89a5244cd79c81242b52b6e49b9bef2&oe=5F8E0BBA",
    "linkUrl": "https://www.instagram.com/hongsick/"
  },
  {
    "id": 6,
    "userId": "bn_sj2013",
    "name": "박서준",
    "imgUrl": "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/76856759_612048102956942_1120568838816006144_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=TV4BCN08OYUAX97idR4&oh=09f0c493c5037f22e6331ee86ba48488&oe=5F91259B",
    "linkUrl": "https://www.instagram.com/bn_sj2013/"
  },
  {
    "id": 7,
    "userId": "ryusdb",
    "name": "류준열",
    "imgUrl": "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/58004192_2433784366854980_2844436572466577408_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=peAlYpF-Br0AX8oHSAZ&oh=d47abca534bbef5fa54ea84599a6c1a0&oe=5F903344",
    "linkUrl": "https://www.instagram.com/ryusdb/"
  },
  {
    "id": 8,
    "userId": "hyeri_0609",
    "name": "혜리",
    "imgUrl": "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/119200381_331276324860172_1821211683805744261_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=wdpyWyERqwMAX_-JtlQ&oh=6d2c4c625c0336cfe3e88f439a086f98&oe=5F8F4829",
    "linkUrl": "https://www.instagram.com/hyeri_0609/"
  },
  {
    "id": 9,
    "userId": "ahnhani_92",
    "name": "하니",
    "imgUrl": "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/104341483_732598120860143_5300298685103431993_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=iaJ22eDMb0sAX8mvorr&oh=36b90b6e78d2bfd95a6412e88eebf5d0&oe=5F94AA86",
    "linkUrl": "https://www.instagram.com/ahnhani_92/"
  },
  {
    "id": 10,
    "userId": "soohyun_k216",
    "name": "김수현",
    "imgUrl": "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/104263568_652801965310952_8783373599229459553_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=GH1nGTaYLNUAX9xqCN-&oh=9c3a7b9b88a213bf15ca0ce8587d2033&oe=5F93B440",
    "linkUrl": "https://www.instagram.com/soohyun_k216/"
  },
  {
    "id": 11,
    "userId": "70csw",
    "name": "차승원",
    "imgUrl": "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/917149_469313119879115_200642689_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Hb_OVtMHP7sAX8LakMb&oh=b473986516693cf690350f1aee2fe551&oe=5F9420A1",
    "linkUrl": "https://www.instagram.com/70csw/"
  },
  {
    "id": 12,
    "userId": "yoanaloves",
    "name": "정려원",
    "imgUrl": "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/119606481_1748571491985746_5866417826910744925_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=EUSOjcnHV8cAX9CiDcj&oh=9b4084dbe8c02d1839445013df017820&oe=5F93AD12",
    "linkUrl": "https://www.instagram.com/yoanaloves/"
  },
  {
    "id": 13,
    "userId": "hyorin_min",
    "name": "민효린",
    "imgUrl": "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/95376008_250562732989828_8445202341677760512_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=v9HQKxstK_QAX_3-p3U&oh=755041ae476242188eeea119046e502e&oe=5F92F32E",
    "linkUrl": "https://www.instagram.com/hyorin_min/"
  },
  {
    "id": 14,
    "userId": "ron_sae",
    "name": "김새론",
    "imgUrl": "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118973777_351014246036186_4830603528573754618_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=L6jEUnBKM8sAX_csqpj&oh=95be357e37a7df0b1bcf3a7021324dac&oe=5F94C332",
    "linkUrl": "https://www.instagram.com/ron_sae/"
  }
];

// linkUrl 넣기 *************************************

// console.log(PROFILE_DATA);

function addCommentToFeed(e) {
  // e.target => add-comment-btn
  // e.target.parentNode => add-comment
  // e.target.parentNode.previousSibling => comment-list
  // e.target.parentNode.children[0].children[0] => textarea
  let commentList = e.target.parentNode.previousElementSibling;
  let getCommentText = e.target.parentNode.children[0].children[0];
  let newCommentListDiv = document.createElement('div');
  newCommentListDiv.className = "comment-list-child";
  let newCommentListDivSpan = document.createElement('span');
  newCommentListDivSpan.className = "comment-id";
  newCommentListDivSpan.innerText = "hellobeen";
  let heartContainerDiv = document.createElement('div');
  heartContainerDiv.className = "comment-heart";
  let heartIcon = document.createElement('i');
  heartIcon.className = "fa fa-heart-o";
  let removeIconContainerDiv = document.createElement('div');
  removeIconContainerDiv.className = 'comment-delete';
  let removeIcon = document.createElement('i');
  removeIcon.className = "fa fa-times";
  removeIcon.addEventListener('click', removeComment);
  heartIcon.addEventListener('click', heartColor);
  heartContainerDiv.appendChild(heartIcon);
  removeIconContainerDiv.appendChild(removeIcon);
  newCommentListDiv.appendChild(newCommentListDivSpan);
  newCommentListDiv.append(getCommentText.value);
  newCommentListDiv.appendChild(heartContainerDiv);
  newCommentListDiv.appendChild(removeIconContainerDiv);
  getCommentText.value = "";
  e.target.classList.remove('active');
  commentList.appendChild(newCommentListDiv);
}

function commentButtonActive(obj) {
  // console.log(obj);
  let addCommentButton = obj.parentNode.parentNode.children[1];
  // console.log(addCommentButton);
  obj.value ? addCommentButton.classList.add('active') : addCommentButton.classList.remove('active');
}

function addHeartColorWhenClicked() {
  let heartCollection = document.querySelectorAll('.fa-heart-o');
  heartCollection.forEach(heart => heart.addEventListener('click', heartColor));
}

function heartColor(e) {
  e.target.className = e.target.className === "fa fa-heart-o" ? "fa fa-heart" : "fa fa-heart-o";
}

function removeComment(e) {
  e.target.parentNode.parentNode.remove();
}

function inputEnterSubmit() {
  let commentTextAreaCollection = document.querySelectorAll('.comment-textarea');
  commentTextAreaCollection.forEach((commentTextArea) => commentTextArea.addEventListener('keyup', enterSubmit));
}

function enterSubmit(e) {
  if (e.keyCode === 13) {
    if (!e.target.value) return;
    e.preventDefault;
    e.target.parentNode.parentNode.children[1].click();
  }
}

function personalProfileClickSubMenu() {
  const personalProfile = document.querySelector('.personal-profile-img');
  personalProfile.addEventListener('click', activatePersonalProfileSubMenu);

}

function activatePersonalProfileSubMenu() {
  const personalProfileSubMenu = document.querySelector('.personal-profile-sub-menu');
  personalProfileSubMenu.classList.value.includes('active') ? personalProfileSubMenu.classList.remove('active') : personalProfileSubMenu.classList.add('active');
}

function mainPageStart() {
  // addCommentButtonActivate();
  const buttonTarget = document.querySelectorAll('.add-comment-btn');
  buttonTarget.forEach(button => button.addEventListener('click', addCommentToFeed));
  inputEnterSubmit();
  addHeartColorWhenClicked();
  personalProfileClickSubMenu();
  searchProfile();
  putStoryProfile();
}

function searchProfile() {
  let searchInput = document.querySelector('.search input');
  // console.log(searchInput);
  searchInput.addEventListener('keyup', liveSearchForProfile);
}

function putStoryProfile() {
  let dataContainer = [];
  let storyElementContainer = document.querySelector('.story-element-container');
  PROFILE_DATA.forEach((data) => {
    if (data["id"] >= 14) return;
    let tempArr = [];
    tempArr.push(data["imgUrl"]);
    tempArr.push(data["userId"]);
    dataContainer.push(tempArr);
  });
  // console.log(dataContainer);
  dataContainer.forEach((data) => {
    let storyElement = document.createElement('div');
    storyElement.className = "story-element";
    storyElement.innerHTML =
      `
        <div class="story-image">
          <img src="${data[0]}" alt="">
        </div>
        <div class="story-id">
          <span>${data[1]}</span>
        </div>
      `;
    // console.log(storyElement);
    storyElementContainer.appendChild(storyElement);
  });
}

function liveSearchForProfile(e) {
  let elementCount = 0;
  let dataContainer = [];
  let searchIdResultContainer = document.querySelector('.search-id-result-container');
  searchIdResultContainer.innerHTML = "";
  if (!e.target.value) {
    searchIdResultContainer.className = "search-id-result-container";
    return;
  }
  searchIdResultContainer.className = "search-id-result-container active";
  PROFILE_DATA.forEach((data) => {
    if (data["userId"].includes(e.target.value)) {
      let tempArr = [];
      tempArr.push(data["imgUrl"]);
      tempArr.push(data["userId"]);
      tempArr.push(data["name"]);
      tempArr.push(data["linkUrl"]);
      // console.log(tempArr);
      dataContainer[elementCount++] = tempArr;
      // console.log(data["userId"]);
    }
  });
  if (elementCount <= 5) {
    searchIdResultContainer.style.height = "auto";
    searchIdResultContainer.style.overflow = "visible";
  } else {
    searchIdResultContainer.style.height = "255px";
    searchIdResultContainer.style.overflow = "auto";
  }
  dataContainer.length >= 1 ? dataContainer.forEach((data) => createSearchProfileResult(...data)) : createSearchProfileResult();
}

function createSearchProfileResult(imgUrl, userId, name, linkUrl) {
  // console.log(imgUrl);
  let searchIdResultElement = document.createElement('div');
  searchIdResultElement.className = "search-id-result-element";
  let searchIdResultContainer = document.querySelector('.search-id-result-container.active');
  // console.log(searchIdResultContainer);
  if (!imgUrl && !userId && !name) {
    searchIdResultElement.innerHTML = "<span>검색 결과가 없습니다</span>";
  } else {
    searchIdResultElement.innerHTML =
      `
        <div class="search-profile-container">
          <div class="search-profile-image">
            <a href=${linkUrl}><img src=${imgUrl} alt=""></a>
          </div>
        </div>
        <div class="info-container">
          <a href=${linkUrl}>
            <span>${userId}</span>
            <span>${name}</span>
          </a>
        </div>
      `;
  }
  // console.log(searchIdResultElement);
  searchIdResultContainer.appendChild(searchIdResultElement);
}



mainPageStart();

// SlickJS For Feed Image Showing
$(function () {
  $('.story-element-container').slick({
    arrows: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2
      }
    }]
  });
});


$(function () {
  $('.article-img').slick({
    arrows: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});