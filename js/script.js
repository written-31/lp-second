
// スワイパー
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

// ハンバーガーメニュー
jQuery('.drawer-icon, .drawer-background').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
});

// スムーススクロール
jQuery('a[href^="#"]').click(function() {
  let header = jQuery(".header").innerHeight();
  let speed = 400;
  let id = jQuery(this).attr("href");
  let target = jQuery("#" == id ? "html" : id);
  let position = jQuery(target).offset().top - header;
  jQuery("html, body").animate(
    {
      scrollTop: position
    },
    speed
  );
  return false;
});

// スクロール検知
jQuery(window).on("scroll", function() {
  // トップから100px以上スクロールしたら
  if (100 < jQuery(this).scrollTop()) {
    // is-showクラスをつける
 jQuery('#totop').addClass( 'is-show' );
  } else {
    // 100pxを下回ったらis-showクラスを削除
  jQuery('#totop').removeClass( 'is-show' );
  }
});

// ページ内リンクでクリックした要素に下線引く
$('.header__nav li a').on('click',function(){
  $('.header__nav li a').removeClass('is-active');
  $(this).addClass('is-active');
  return false;
});

// アコーディオン

jQuery('.qa-box__q').on('click', function(){
  jQuery(this).next().slideToggle();
  jQuery(this).children('.qa-box__icon').toggleClass('is-open');
});

// モーダル

jQuery('.js-close-button').on('click', function(e) {
  e.preventDefault();

  var target = jQuery(this).data('target');
  jQuery(target).fadeOut();
});

jQuery('.js-open-button').on('click', function(e) {
  e.preventDefault();

  var target = jQuery(this).data('target');
  jQuery(target).fadeIn();
});