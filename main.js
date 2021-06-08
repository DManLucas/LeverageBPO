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

// // ---------Sliding Image-----------
/**
 *  @function   DOMReady
 *
 *  @param callback
 *  @param element
 *  @param listener
 *  @returns {*}
 *  @constructor
 */
const DOMReady = (
  callback = () => {},
  element = document,
  listener = 'addEventListener'
) => {
  return element[listener]
    ? element[listener]('DOMContentLoaded', callback)
    : window.attachEvent('onload', callback)
}

/**
 *  @function   ProjectAPI
 *
 *  @type {{hasClass, addClass, removeClass}}
 */
const ProjectAPI = (() => {
  let hasClass, addClass, removeClass

  hasClass = (el, className) => {
    if (el === null) {
      return
    }

    if (el.classList) {
      return el.classList.contains(className)
    } else {
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
    }
  }

  addClass = (el, className) => {
    if (el === null) {
      return
    }

    if (el.classList) {
      el.classList.add(className)
    } else if (!hasClass(el, className)) {
      el.className += ' ' + className
    }
  }

  removeClass = (el, className) => {
    if (el === null) {
      return
    }

    if (el.classList) {
      el.classList.remove(className)
    } else if (hasClass(el, className)) {
      let reg = new RegExp('(\\s|^)' + className + '(\\s|$)')

      el.className = el.className.replace(reg, ' ')
    }
  }

  return {
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
  }
})()
/**
 *  @function   readyFunction
 *
 *  @type {Function}
 */
const readyFunction = () => {
  const KEY_UP = 38
  const KEY_DOWN = 40

  let scrollingClass = 'js-scrolling',
    scrollingActiveClass = scrollingClass + '--active',
    scrollingInactiveClass = scrollingClass + '--inactive',
    scrollingTime = 1350,
    scrollingIsActive = false,
    currentPage = 1,
    countOfPages = document.querySelectorAll(
      '.' + scrollingClass + '__page'
    ).length,
    prefixPage = '.' + scrollingClass + '__page-',
    _switchPages,
    _scrollingUp,
    _scrollingDown,
    _mouseWheelEvent,
    _keyDownEvent,
    init

  /**
   *  @function _switchPages
   *
   *  @private
   */
  _switchPages = () => {
    let _getPageDomEl

    /**
     *  @function _getPageDomEl
     *
     *  @param page
     *  @returns {Element}
     *  @private
     */
    _getPageDomEl = (page = currentPage) => {
      return document.querySelector(prefixPage + page)
    }

    scrollingIsActive = true

    ProjectAPI.removeClass(_getPageDomEl(), scrollingInactiveClass)

    ProjectAPI.addClass(_getPageDomEl(), scrollingActiveClass)

    ProjectAPI.addClass(_getPageDomEl(currentPage - 1), scrollingInactiveClass)

    ProjectAPI.removeClass(_getPageDomEl(currentPage + 1), scrollingActiveClass)

    setTimeout(() => {
      return (scrollingIsActive = false)
    }, scrollingTime)
  }
  /**
   *  @function _scrollingUp
   *
   *  @private
   */
  _scrollingUp = () => {
    if (currentPage === 1) {
      return
    }

    currentPage--

    _switchPages()
  }
  /**
   *  @function _scrollingDown
   *
   *  @private
   */
  _scrollingDown = () => {
    if (currentPage === countOfPages) {
      return
    }

    currentPage++

    _switchPages()
  }
  /**
   *  @function _mouseWheelEvent
   *
   *  @param e
   *  @private
   */
  _mouseWheelEvent = (e) => {
    if (scrollingIsActive) {
      return
    }

    if (e.wheelDelta > 0 || e.detail < 0) {
      _scrollingUp()
    } else if (e.wheelDelta < 0 || e.detail > 0) {
      _scrollingDown()
    }
  }
  /**
   *  @function _keyDownEvent
   *
   *  @param e
   *  @private
   */
  _keyDownEvent = (e) => {
    if (scrollingIsActive) {
      return
    }

    let keyCode = e.keyCode || e.which

    if (keyCode === KEY_UP) {
      _scrollingUp()
    } else if (keyCode === KEY_DOWN) {
      _scrollingDown()
    }
  }

  /**
   *  @function init
   *
   *  @note     auto-launch
   */
  init = (() => {
    document.addEventListener('mousewheel', _mouseWheelEvent, false)

    document.addEventListener('DOMMouseScroll', _mouseWheelEvent, false)

    document.addEventListener('keydown', _keyDownEvent, false)
  })()
}

DOMReady(readyFunction)
// // ---------End Of Sliding Image-----------

// // ---------Quotes-----------
var current = 0,
  max = $('.q-slider > .q-slide').length
$('.q-slider > .q-slide:gt(0)').hide()
$('.q-counter').text('1 of ' + max)

setInterval(function () {
  $('.q-slider > .q-slide:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.q-slider')
  current++
  if (current >= max) current = 0
  $('.q-progress').width(((current + 1) * 315) / max)
  $('.q-counter').text(current + 1 + ' of ' + max)
}, 3000)
