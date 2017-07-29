$(document).ready(start);

function start(){
setupNav();
playVideo();
$('h2').click(toggleClass);
$('.name').click(toggleEmail);

function toggleClass() {
var wrapper = $(this).closest('.video-container')
wrapper.find('.description').toggleClass('active');
// $(".description").addClass("active");

};


function toggleEmail(){
  console.log('clicked');
  $('.hiddenEmail').toggleClass('active');
}

function playVideo() {
  if ($(window).width() >= 479) {
     var v = $(".video");

     $(v).on('canplay', function(){
        $(v).mouseenter(function(){
           $(this).get(0).play();
        }).mouseleave(function(){
           $(this).get(0).pause();
        })
     });
}
   }

     function setupNav() {
       var stickyNavTop = $('header').offset().top;

       var stickyNav = function(){
       var scrollTop = $(window).scrollTop();

       if (scrollTop > stickyNavTop) {
           $('header').addClass('sticky');
       } else {
           $('header').removeClass('sticky');
       }
     };
       stickyNav();
      $(window).scroll(function() {
        stickyNav();
      })};

}
