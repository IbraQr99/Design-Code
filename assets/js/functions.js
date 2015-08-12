$(function() {
  mentoringBubbleClick();
});

function mentoringBubbleClick() {
  $('.face').on('click', function () {
	  
	  var 
	  	$this = $(this),
	  	faceTop = $this.position().top,
		  vertMath = -1 * (faceTop - 230);
	  
	  //console.log(vertMath);
	  
	  $this.parent().css('top', + vertMath +'px');
    
	  $this.addClass('has-bubble-open')
	  .siblings().removeClass('has-bubble-open');
	  
  });
	
	
}


$(window).scroll(function(){
  youtubeVideoScroll();
  startMentoring();
});

function  youtubeVideoScroll() {	
  var wScroll = $(window).scrollTop();
	
	$('.video-strip').css('background-position','center -'+ wScroll+ 'px')
}

function  startMentoring() {	
	
	var wScroll = $(window).scrollTop();

	if($('section.mentoring').offset().top - 200 < wScroll) {
		$('.faces').addClass('launched');
		setTimeout(function() {
      $('.face:nth-child(3)').addClass('has-bubble-open') 
    }, 400);
	}
	
};