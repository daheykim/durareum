/* ham_menu 햄버거 메뉴 슬라이딩 */
const btnHammenu = document.querySelector('.btn_hammenu');
const hamMenu = document.querySelector('.ham_menu');

btnHammenu.addEventListener('click', (rotate) => {
  rotate.currentTarget.classList.toggle('active');
});

btnHammenu.addEventListener('click', () => {
  if(hamMenu.classList.contains('menu_left')) {
    hamMenu.classList.remove('menu_left');
  } else {
    hamMenu.classList.add('menu_left').stop().animate({
      height: '300px'
    }, 300);
  }
})

/* ham_list_wrap 햄버거 서브메뉴 아코디언*/
let coll = document.getElementsByClassName("collapsible");
let i = 0;

for (i=0; i<coll.length; i++) {
  coll[i].addEventListener('click', function(){
    let content = this.nextElementSibling;
    if(content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
}


/* visual_main Swiper */
let slideThum = new Swiper(".thum_box", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  });
  
  let mainSlide = new Swiper(".main_slide", {
  spaceBetween: 1,
  thumbs: {
    swiper: slideThum,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets"
  }
  });

/* Mobile&Tablet .weekly_schedule */
function scheduleTab(evt, tabNumber) {
  let i, weeklyList, tabLink

  weeklyList = document.getElementsByClassName('weekly_list');
  for(i = 0; i<weeklyList.length; i++){
    weeklyList[i].style.display = "none";
  }
  l
}

/* PC .schedule */
document.addEventListener('DOMContentLoaded', () => {
  const date = new Date(2022, 10, 1, 0, 0, 0);

  const renderCalendar = () => {
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();
  
    //year_month 채우기
    document.querySelector('.year_month').innerText = `${viewYear}년 ${viewMonth + 1}월`;
  
    //지난 달 마지막 Date, 이번 달 마지막 Date
    const prevLast = new Date(viewYear, viewMonth, 0);
    const thisLast = new Date(viewYear, viewMonth + 1, 0);
  
    const PLDate = prevLast.getDate();
    const PLDay = prevLast.getDay();
  
    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();
  
  
    //Dates 기본 배열들
    const prevDates = [];
    const thisDates = [...Array(TLDate + 1).keys()].slice(1);
    const nextDates = [];
  
    //preveDates 계산
    if (PLDay !== 6) {
      for (let i = 0; i < PLDay + 1; i++) {
        prevDates.unshift(PLDate - i);
      }
    }
  
    //netDates 계산
    for (let i = 1; i < 7 - TLDay; i++) {
      nextDates.push(i);
    }
  
    //Dates 합치기
    const dates = prevDates.concat(thisDates, nextDates);
  
    //Dates 정리
    dates.forEach((date, i) => {
      dates[i] = `<div class="date"><a href="#!">${date}</a></div>`;
    })
  
    //Dates 그리기
    document.querySelector('.dates').innerHTML = dates.join('');
  }

  renderCalendar();
  
  //이전 달, 다음 달 넘어가기

  const prevMonth = document.querySelector('.go_prev');

  prevMonth.addEventListener('click', function(){
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  })

  const nextMonth = document.querySelector('.go_next');

  nextMonth.addEventListener('click', function(){
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  })

})

/* recommend_slide */
let recoSlides = document.querySelector('.recommend_contents');
let recoSlide = document.querySelectorAll('.recommend_contents li');
let recoCurrentIdx = 0;
let recoslideCount = recoSlide.length;
let recoPrev = document.querySelector('.btn_prev');
let recoNext = document.querySelector('.btn_next');
recoSlideWidth = recoSlides[0].offsetWidth


function moveSlide(num) {
  recoSlides.style.lest
}






/* map */
document.addEventListener('DOMContentLoaded', () => {
  //카카오맵 api
  let mapContainer = document.getElementById('map'), mapOption = { 
    center: new kakao.maps.LatLng(35.1711778, 129.1271956), level: 3
  };

  let map = new kakao.maps.Map(mapContainer, mapOption); 

  let points =
  new kakao.maps.LatLng(35.1711778, 129.1271956);

  let bounds = new kakao.maps.LatLngBounds();    

  marker = new kakao.maps.Marker({position : points});
  marker.setMap(map);

  bounds.extend(points);
})
  








