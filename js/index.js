$(document).ready(start);

function start(){

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

//getting video element using jQuery
     var v = $(".video");

  //check if video is ready to play
     $(v).on('canplay', function(){
        $(v).mouseenter(function(){
           $(this).get(0).play();
        }).mouseleave(function(){
           $(this).get(0).pause();
        })
     });


}
