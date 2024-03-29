// const cards = document.querySelector(".cards");
// const images = document.querySelectorAll(".card__img");
// const backgrounds = document.querySelectorAll(".card__bg");
// const range = 40;

// // const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
// const calcValue = (a, b) => (a/b*range-range/2).toFixed(1) // thanks @alice-mx

// let timeout;
// document.addEventListener('mousemove', ({x, y}) => {
//   if (timeout) {
//     window.cancelAnimationFrame(timeout);
//   }
  	
//   timeout = window.requestAnimationFrame(() => {
//     const yValue = calcValue(y, window.innerHeight);
//     const xValue = calcValue(x, window.innerWidth);

//     cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

//     [].forEach.call(images, (image) => {
//       image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
//     });

//     [].forEach.call(backgrounds, (background) => {
//       background.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`;
//     })
// 	})
// }, false);

// // 팝업
//    var target = document.querySelectorAll('.btn_open');
//    var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
//   //  var card = document.querySelectorAll('#pop_card');
//    var targetID;
  

// // 팝업 열기
// for(var i = 0; i < target.length; i++){
//   target[i].addEventListener('click', function(){
//     targetID = this.getAttribute('href');
//     document.querySelector(targetID).style.display = 'block';
//     // this.style.display = 'none';
//     // card = this.style.display = 'none';
    
//   });
// }

// // card.addEventListener("click", function () {
// //   this.classList.toggle("active");
// // });

// // 팝업 닫기
// for(var j = 0; j < target.length; j++){
//   btnPopClose[j].addEventListener('click', function(){
//     this.parentNode.parentNode.style.display = 'none';
//   });
// }


// let closeTab = document.querySelector('.close_tab');
  

// closeTab.addEventListener("click", function () {
//   this.classList.toggle("active");
//   let window = document.getElementById('window');
//   window.classList.toggle("active");
// });

// let openPop = document.querySelector('.card_item');

// openPop.addEventListener("click", function(){
//   this.classList.toggle("on");
//   let window = document.getElementById('window');
//   window.classList.toggle("on");
// })


 // 팝업 열기 함수
 function showPopup(language) {
  // 모든 팝업 닫기
  closeAllPopups();
  let popup = document.getElementById("popup" + language);
  popup.style.display = "block";
}
// 팝업 닫기 함수
function closePopup(popupId) {
  let popup = document.getElementById(popupId);
  popup.style.display = "none";
}
// 모든 팝업 닫기 함수
function closeAllPopups() {
  let popups = document.querySelectorAll('.popup');
  popups.forEach(function (popup) {
    popup.style.display = "none";
  });
}