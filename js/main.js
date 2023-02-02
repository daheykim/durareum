/* ham_menu 햄버거 메뉴 슬라이딩 */
const btnHammenu = document.querySelector('.btn_hammenu');
const hamMenu = document.querySelector('.ham_menu');

btnHammenu.addEventListener('click', function(rotate){
  rotate.currentTarget.classList.toggle('active');
});

btnHammenu.addEventListener('click', function() {
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
let weeklyTitle = document.querySelector('.weekly_title ul')
let titleEleWidth = document.querySelector('.weekly_title ul li').offsetWidth
let weeklyList = document.querySelector('.weekly_list')
let weekPrev = document.querySelector('.weekly_left_btn')
let weekNext = document.querySelector('.weekly_right_btn')

weekNext.addEventListener('click', function() {
  weeklyTitle.style.transform = "translateX(" + titleEleWidth * -1 + "px)"
})

weekPrev.addEventListener('click', function(){
  weeklyTitle.style.transform = "translateX(" + titleEleWidth + "px)"
})



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
  
    //prevDates 계산
    if (PLDay !== 6) {
      for (let i = 0; i < PLDay + 1; i++) {
        prevDates.unshift(PLDate - i);
      }
    }
  
    //nextDates 계산
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
  const nextMonth = document.querySelector('.go_next');

  prevMonth.addEventListener('click', function(){
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  })

  nextMonth.addEventListener('click', function(){
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  })
})


/* recommend 슬라이드*/
const InpRecoTabArray = document.querySelectorAll('.input_reco')

let recoContentsArray = document.querySelectorAll('.recommend_contents')

let movieSlideArray = document.querySelectorAll('.recommend_movie .reco_frame .recommend_contents .recommend_content')
let performSlideArray = document.querySelectorAll('.recommend_performance .reco_frame .recommend_contents .recommend_content')

let recoSlideWidth = document.querySelector('.recommend_contents .recommend_content').offsetWidth + 30
let recommendSheet = document.querySelectorAll('.recommend_sheet')

let recoBtnPrev = document.querySelector('.btn_prev')
let recoBtnNext = document.querySelector('.btn_next')

let movieCount = 1
let performCount = 1


recoBtnNext.addEventListener('click', function(){
   
    if (InpRecoTabArray[0].checked) {
      if (movieCount >= movieSlideArray.length -3) {
        movieCount = 0
      }

      recoContentsArray[0].style.transform = 'translateX(' + (recoSlideWidth * (movieCount * -1)) + 'px)'
      movieCount ++
    }

    if (InpRecoTabArray[1].checked) {
      if (performCount >= performSlideArray.length -3) {
        performCount = 0
      }

      recoContentsArray[1].style.transform = 'translateX(' + (recoSlideWidth * (performCount * -1)) + 'px)'
      performCount ++
    }
})


recoBtnPrev.addEventListener('click', function(){
    if (InpRecoTabArray[0].checked) {
      if (movieCount <= 1) {
        movieCount = 6
      }
      recoContentsArray[0].style.transform = 'translateX(' + recoSlideWidth * ((movieCount - 2) * -1) + 'px)'
      movieCount --
    }
    if (InpRecoTabArray[1].checked) {
      if (performCount <= 1) {
        performCount = 6
      }
      recoContentsArray[1].style.transform = 'translateX(' + recoSlideWidth * ((performCount - 2) * -1) + 'px)'
      performCount --
    }
})


/* critic 슬라이드 */
let criticBtnPrev = document.querySelector('.critic .page_button .btn_left')
let criticBtNext = document.querySelector('.critic .page_button .btn_right')

let criticSlides = document.querySelector('.critic_main')
let criticSlideWidth = document.querySelector('.critic_box').offsetWidth
let criticSlideArray = document.querySelectorAll('.critic_box')

let criticCount = 1


criticBtNext.addEventListener('click', function(){
  if (criticCount >= criticSlideArray.length - 1){
    criticCount = 0
  }

  criticSlides.style.transform = 'translateX(' + (criticSlideWidth * (criticCount * -1)) + 'px)'
  criticCount ++
})

criticBtnPrev.addEventListener('click', function(){
  if (criticCount <= 1) {
    criticCount = 4
  }

  criticSlides.style.transform = 'translateX(' + (criticSlideWidth * (criticCount -2) * -1) + 'px)'
  criticCount --
})


/* event 슬라이드 */
let eventBtnPrev = document.querySelector('.event .page_button .btn_left')
let eventBtNext = document.querySelector('.event .page_button .btn_right')

let eventSlides = document.querySelector('.event_wrap')
let eventSlideWidth = document.querySelector('.event_banner').offsetWidth + 8
let eventSlideArray = document.querySelectorAll('.event_banner')

let eventCount = 1


eventBtNext.addEventListener('click', function(){
  if (eventCount >= eventSlideArray.length - 1){
    eventCount = 0
  }

  eventSlides.style.transform = 'translateX(' + (eventSlideWidth * (eventCount * -1)) + 'px)'
  eventCount ++
})

eventBtnPrev.addEventListener('click', function(){
  if (eventCount <= 1) {
    eventCount = 16
  }

  eventSlides.style.transform = 'translateX(' + (eventSlideWidth * (eventCount -2) * -1) + 'px)'
  eventCount --
})



/* map 카카오맵 API*/
document.addEventListener('DOMContentLoaded', () => {
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
  

/* quick_reserve_modal 날짜 슬라이드*/
const startDate = new Date(2022, 10, 1, 0, 0, 0)
const lastDate = new Date(2022, 10+1, 0, 0, 0)
const dateArray = []
  
const viewYear = startDate.getFullYear();
const viewMonth = startDate.getMonth();

document.querySelector('.reserve_YYMM').innerText = `${viewYear}년 ${viewMonth+1}월`

while(startDate <= lastDate) {
  dateArray.push(startDate.getDate());
  startDate.setDate(startDate.getDate() + 1);
}

for(let i=0; i<dateArray.length; i++) {
  let reserveDateSpan = document.createElement('span')
  reserveDateSpan.setAttribute('class', 'reserve_date_select')
  reserveDateSpan.innerText = dateArray[i]
  reserveDateSpan.style.cursor = 'pointer'
  document.querySelector('.reserve_date_slide').append(reserveDateSpan)
}


/* quick_reserve_modal 프로그램 리스트*/
import movieData from "./movieData.js";
import performanceData from "./performanceData.js";
import exhibitData from "./exhibitData.js";

const modalMovie = document.querySelector('.modal_movie')
const modalPerformance = document.querySelector('.modal_performance')
const modalExhibit = document.querySelector('.modal_exhibit')


//날짜를 누르면 해당 날짜까지 상영하는 프로그램 리스트가 나오게
const dateSelectArray = document.querySelectorAll('.reserve_date_select')
let dateSelect = document.querySelector('.reserve_date_select')

let movieList = document.createElement('div')
movieList.setAttribute('class', 'movie_List')
modalMovie.appendChild(movieList)

let performList = document.createElement('div')
performList.setAttribute('class', 'movie_List')
modalPerformance.appendChild(performList)

let exhibitList = document.createElement('div')
exhibitList.setAttribute('class', 'movie_List')
modalExhibit.appendChild(exhibitList)

let movieListCount = false
let performListCount = false
let exhibitListCount = false


for (let i=0; i<dateSelectArray.length; i++) {
  dateSelectArray[i].addEventListener('click', function(e) {
    
    let children = dateSelect.parentElement.children
    for (let j=0; j<children.length; j++) {
      children[j].classList.remove('date_selected')
    }
    e.currentTarget.classList.add('date_selected')

    
    if (movieListCount) {
        movieList.innerText = ''
        movieListCount = false
    }
    if (performListCount) {
        performList.innerText = ''
        performListCount = false
    }
    if (exhibitListCount) {
        exhibitList.innerText = ''
        exhibitListCount = false
    }

    for(let j=0; j<movieData.length; j++) {
      if(movieData[j].date <= dateSelectArray[i].innerText) {
        let movieListBox = document.createElement('div')
        movieListBox.setAttribute('class', 'list_link')
        movieList.appendChild(movieListBox)

        let gradeImg = document.createElement('img')
        gradeImg.setAttribute('class', 'modal_grade')
        gradeImg.setAttribute('src', movieData[j].grade)

        let movieTitle = document.createElement('div')
        movieTitle.setAttribute('class', 'modal_program_title')
        movieTitle.style.cursor = 'pointer'
        let movieListTitleText = document.createTextNode(movieData[j].title)
        movieTitle.appendChild(movieListTitleText)

        movieListBox.appendChild(gradeImg)
        movieListBox.appendChild(movieTitle)
        
        movieListCount = true


        movieTitle.addEventListener('click', function(){
          let modalTitleText = document.createTextNode('')

          let modalTitleName = document.querySelector('.modal_title_name')
          modalTitleName.innerText = movieData[j].title
          modalTitleName.appendChild(modalTitleText)
          
        })

        movieListBox.addEventListener('click',function(e){
          let listChildren = movieListBox.parentElement.children

          for (let i=0; i<listChildren.length; i++) {
            listChildren[i].style.fontWeight = 'normal'
        }
          e.currentTarget.style.fontWeight = 'bold'
        })
      }
    } //영화

    for(let j=0; j<performanceData.length; j++) {
      if(performanceData[j].date <= dateSelectArray[i].innerText) {

        let performListBox = document.createElement('a')
        performListBox.setAttribute('class', 'list_link')
        performList.appendChild(performListBox)

        let gradeImg = document.createElement('img')
        gradeImg.setAttribute('class', 'modal_grade')
        gradeImg.setAttribute('src', performanceData[j].grade)

        let performTitle = document.createElement('div')
        performTitle.setAttribute('class', 'modal_program_title')
        performTitle.style.cursor = 'pointer'
        let performListTitleText = document.createTextNode(performanceData[j].title)
        performTitle.appendChild(performListTitleText)

        performListBox.appendChild(gradeImg)
        performListBox.appendChild(performTitle)

        performListCount = true

        performTitle.addEventListener('click', function(){
          let performListTitleText = document.createTextNode('')

          let modalTitleName = document.querySelector('.modal_title_name')
          modalTitleName.innerText = performanceData[j].title
          modalTitleName.appendChild(performListTitleText)
        })

        performListBox.addEventListener('click',function(e){
          let listChildren = performListBox.parentElement.children

          for (let i=0; i<listChildren.length; i++) {
            listChildren[i].style.fontWeight = 'normal'
        }
          e.currentTarget.style.fontWeight = 'bold'
        })
      }
    } //공연

    for(let j=0; j<exhibitData.length; j++) {
      if(exhibitData[j].date <= dateSelectArray[i].innerText) {

        let exhibitListBox = document.createElement('div')
        exhibitListBox.setAttribute('class', 'list_link')
        exhibitList.appendChild(exhibitListBox)

        let gradeImg = document.createElement('img')
        gradeImg.setAttribute('class', 'modal_grade')
        gradeImg.setAttribute('src', exhibitData[j].grade)

        let exhibitTitle = document.createElement('div')
        exhibitTitle.setAttribute('class', 'modal_program_title')
        exhibitTitle.style.cursor = 'pointer'
        let exhibitListTitleText = document.createTextNode(exhibitData[j].title)
        exhibitTitle.appendChild(exhibitListTitleText)

        exhibitListBox.appendChild(gradeImg)
        exhibitListBox.appendChild(exhibitTitle)

        exhibitListCount = true


        exhibitTitle.addEventListener('click', function(){
          let exhibitListTitleText = document.createTextNode('')

          let modalTitleName = document.querySelector('.modal_title_name')
          modalTitleName.innerText = exhibitData[j].title
          modalTitleName.appendChild(exhibitListTitleText)
        })

        exhibitListBox.addEventListener('click',function(e){
          let listChildren = exhibitListBox.parentElement.children

          for (let i=0; i<listChildren.length; i++) {
            listChildren[i].style.fontWeight = 'normal'
        }
          e.currentTarget.style.fontWeight = 'bold'
        })
      }
    }
  })
} //전시행사


let seatArray = document.querySelectorAll('.seat')
let seatCount = 0
let seatColorChange = 'seat_color_change'

for (let i=0; i<seatArray.length; i++){
  seatArray[i].addEventListener('click', function(){
    /* seatArray[i].classList.toggle('seat_color') */

    let modalPriceText = document.createTextNode(``)
    let modalCountText = document.createTextNode(``)

    if(seatArray[i].classList.contains(seatColorChange)) {
      seatArray[i].classList.remove(seatColorChange)
      seatCount--
    } else {
      seatArray[i].classList.add(seatColorChange)
      seatCount++
    }

    let modalTotalCount = document.querySelector('.modal_total_count')
    modalTotalCount.innerText = (`예매인원 : ${seatCount}인`)
    modalTotalCount.appendChild(modalCountText)

    let modalTotalPrice = document.querySelector('.modal_total_price')
    modalTotalPrice.innerText =`예매금액 : ${movieData[i].price * seatCount}원`
    modalTotalPrice.appendChild(modalPriceText)
  });
}

let quickReserveBtn = document.querySelector('.quick_reserve')
let quickModal = document.querySelector('.quick_reserve_modal')

quickReserveBtn.addEventListener('click', function(){
  quickModal.classList.add('show_modal')
})

document.querySelector('.modal_submit').addEventListener('click', function(){
  quickModal.classList.remove('show_modal')
})
document.querySelector('.modal_close').addEventListener('click', function(){
  quickModal.classList.remove('show_modal')
})

//

/* //공연 리스트
 for (let i=0; i<performanceData.length; i++) {
  let performList = document.createElement('li')
  performList.setAttribute('class', 'perform_List')
  performList.style.display = 'none'
  modalPerformance.appendChild(performList)

  let performListTitleText = document.createTextNode(performanceData[i].title)
  performList.appendChild(performListTitleText)
}

//전시행사 리스트
for (let i=0; i<exhibitData.length; i++) {
  let exhibitList = document.createElement('li')
  exhibitList.setAttribute('class', 'perform_List')
  exhibitList.style.display = 'none'
  modalExhibit.appendChild(exhibitList)
  
  let exhibitListTitleText = document.createTextNode(exhibitData[i].title)
  exhibitList.appendChild(exhibitListTitleText)
}
 */


/* info_banner 닫기*/
document.querySelector('.info_banner_close').addEventListener('click', function(){
  document.querySelector('.info_banner').style.display = 'none'
})


