// // ---------Responsive-navbar-active-animation-----------
function test() {
  var tabsNewAnim = $('#navbarSupportedContent')
  var selectorNewAnim = $('#navbarSupportedContent').find('li').length
  var activeItemNewAnim = tabsNewAnim.find('.active')
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight()
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth()
  var itemPosNewAnimTop = activeItemNewAnim.position()
  var itemPosNewAnimLeft = activeItemNewAnim.position()
  $('.hori-selector').css({
    top: itemPosNewAnimTop.top + 'px',
    left: itemPosNewAnimLeft.left + 'px',
    height: activeWidthNewAnimHeight + 'px',
    width: activeWidthNewAnimWidth + 'px',
  })
  $('#navbarSupportedContent').on('click', 'li', function (e) {
    $('#navbarSupportedContent ul li').removeClass('active')
    $(this).addClass('active')
    var activeWidthNewAnimHeight = $(this).innerHeight()
    var activeWidthNewAnimWidth = $(this).innerWidth()
    var itemPosNewAnimTop = $(this).position()
    var itemPosNewAnimLeft = $(this).position()
    $('.hori-selector').css({
      top: itemPosNewAnimTop.top + 'px',
      left: itemPosNewAnimLeft.left + 'px',
      height: activeWidthNewAnimHeight + 'px',
      width: activeWidthNewAnimWidth + 'px',
    })
  })
}
$(document).ready(function () {
  setTimeout(function () {
    test()
  })
})
$(window).on('resize', function () {
  setTimeout(function () {
    test()
  }, 500)
})
$('.navbar-toggler').click(function () {
  setTimeout(function () {
    test()
  })
})

// // ---------End Of Responsive-navbar-active-animation-----------

// // ---------Hero Image-----------
$('.sd').click(function () {
  $('.hero, .content').addClass('scrolled')
})

$('.hero').mousewheel(function (e) {
  if (e.deltaY < 0) {
    $('.hero, .content').addClass('scrolled')
    return false
  }
})
$(window).mousewheel(function (e) {
  if ($('.hero.scrolled').length) {
    if ($(window).scrollTop() == 0 && e.deltaY > 0) {
      $('.hero, .content').removeClass('scrolled')
    }
  }
})

var animateButton = function (e) {
  e.preventDefault
  //reset animation
  e.target.classList.remove('animate')

  e.target.classList.add('animate')
  setTimeout(function () {
    e.target.classList.remove('animate')
  }, 700)
}

var bubblyButtons = document.getElementsByClassName('bubbly-button')

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false)
}
// // ---------End Of Hero Image-----------
