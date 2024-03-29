// swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  // effect: "fade",
  allowTouchMove : false,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
        
    390: {
      slidesPerView: 3,  //브라우저가 768보다 클 때
      spaceBetween: 25,
    },
    720: {
      slidesPerView: 1,  //브라우저가 1024보다 클 때
      // spaceBetween: 50,
    },
    1024:{
      slidesPerView: 1,
    }
  },
});

// 페이지가 로드될 때 실행되는 이벤트 핸들러
    document.addEventListener('DOMContentLoaded', function () {

      // 모든 섹션과 내비게이션 링크를 선택
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav a');

      // 현재 활성화된 섹션의 인덱스를 저장하는 변수
      let currentSectionIndex = 0;

      // 스크롤 중인지 여부를 나타내는 변수
      let scrolling = false;

      // 다음 섹션으로 스크롤하는 함수
      function scrollToNextSection() {
        scrolling = true;
        currentSectionIndex++;
        if (currentSectionIndex >= sections.length) {
          currentSectionIndex = 0;
        }
        // 다음 섹션으로 스무스하게 스크롤
        sections[currentSectionIndex].scrollIntoView({
          behavior: 'smooth'
        });
      }

      // 이전 섹션으로 스크롤하는 함수
      function scrollToPreviousSection() {
        scrolling = true;
        currentSectionIndex--;
        if (currentSectionIndex < 0) {
          currentSectionIndex = sections.length - 1;
        }
        // 이전 섹션으로 스무스하게 스크롤
        sections[currentSectionIndex].scrollIntoView({
          behavior: 'smooth'
        });
      }

      // 마우스 휠 스크롤 이벤트 리스너
      document.addEventListener('wheel', function (event) {
        event.preventDefault(); // 기본 스크롤 동작 방지
        if (!scrolling) { // 스크롤 중이 아닌 경우에만 실행
          if (event.deltaY > 0) { // 마우스 휠이 아래로 스크롤될 때
            if (currentSectionIndex === sections.length - 1) {
              // 현재 섹션이 마지막 섹션인 경우 스크롤 이벤트 무시
              return;
            }
            scrollToNextSection(); // 다음 섹션으로 스크롤
          } else { // 마우스 휠이 위로 스크롤될 때
            scrollToPreviousSection(); // 이전 섹션으로 스크롤
          }
          // 스크롤 후 1초 후에 다시 스크롤 가능하도록 설정
          setTimeout(function () {
            scrolling = false;
          }, 1000);
        }
      }); // 내비게이션 링크에 클릭 이벤트 리스너 추가
      navLinks.forEach(function (link, index) {
        link.addEventListener('click', function (event) {
          event.preventDefault(); // 링크 기본 동작 방지
          scrollToSection(index); // 해당 섹션으로 스크롤
        });
      });

      // 섹션으로 스크롤하는 함수
      function scrollToSection(index) {
        scrolling = true;
        // 해당 섹션으로 스무스하게 스크롤
        sections[index].scrollIntoView({
          behavior: 'smooth'
        });
        // 현재 활성화된 섹션 인덱스 업데이트
        currentSectionIndex = index;
        // 스크롤 후 1초 후에 다시 스크롤 가능하도록 설정
        setTimeout(function () {
          scrolling = false;
        }, 1000);
        activateNavLink(index); // 활성 내비게이션 링크 클래스 추가
      }

      // 활성 내비게이션 링크 설정 함수
      function activateNavLink(index) {
        navLinks.forEach(function (link, i) {
          if (i === index) {
            link.classList.add('active'); // 선택된 링크에 활성 클래스 추가
          } else {
            link.classList.remove('active'); // 선택되지 않은 링크의 활성 클래스 제거
          }
        });
      }

      // 스크롤 이벤트 리스너
      window.addEventListener('scroll', function () {
        let currentSection = 0;
        let minDistance = Math.abs(window.scrollY - sections[0].offsetTop);
        // 모든 섹션에 대해 반복하여 가장 가까운 섹션을 찾음
        sections.forEach(function (section, index) {
          const distance = Math.abs(window.scrollY - section.offsetTop);
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = index;
          }
        });
        activateNavLink(currentSection); // 현재 활성화된 섹션에 해당하는 내비게이션 링크 활성화
      });
    });
 