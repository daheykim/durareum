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
let coll = document.getElementsByClassName('collapsible');
let i = 0;

for (let i=0; i<coll.length; i++) {
  coll[i].addEventListener('click', function(){
    let content = this.nextElementSibling;
    if(content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
}

/* year_move */
$(function(){
  const yearMoveOffset = $('.year_move').offset();

  $(window).scroll(function(){
    if($(document).scrollTop() > yearMoveOffset.top) {
      $('.year_move').addClass('tab_fixed');
    } else {
      $('.year_move').removeClass('tab_fixed')
    }
  });
}); 


/* visual_main_txt */
 let controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave',
        duration: "100%"
      }
  });
  let vmSlides = document.querySelectorAll(".vm_panel");

  for (let i=0; i<vmSlides.length; i++) {
    let scene = new ScrollMagic.Scene({
      triggerElement: vmSlides[i]
    })
    .setPin('.visual_main_wrap', {pushFollowers: false})
    .addTo(controller);
  }


/* history */
$(function() {
  $(window).scroll(function(){
    let historyBox = document.querySelectorAll('.history_box')

    for(let i=0; i<historyBox.length;i++) {
      let historyIndex = $(historyBox).eq(i)

      if($(window).scrollTop() + 700 >= historyIndex.offset().top + (historyIndex.outerHeight(true)- historyIndex.height())) {
        historyBox[i].style.opacity = '1'
      }
    }
  })
})

