$(document).ready(start);

function start(){

$('h2').hover(toggleClass);
$('.name').hover(toggleEmail);

function toggleClass() {
var wrapper = $(this).closest('.video-container')
wrapper.find('.description').toggleClass('active');
// $(".description").addClass("active");

};


function toggleEmail(){
  console.log('clicked');
  $('.hiddenEmail').toggleClass('active');
}
}
