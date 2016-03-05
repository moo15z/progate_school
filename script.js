$(function() {

// ここからtopのもっと詳しく
  $('#read-more').click(function() {
  	if ($(this).hasClass('open')) {
  		$('#more-text').fadeOut();
  		$('#read-more').removeClass('open').text('もっと詳しく');
  	} else {
  		$("#more-text").fadeIn();
        $("#read-more").addClass("open").text("閉じる");
  	}
  });
// ここまでtopのもっと詳しく




//  ここからlanguagesのホバー
   $('.languages-hover').hover(
    function() {
    	console.log($(this).find('.languages-detail'))
      
      $(this).find('.languages-detail').fadeIn(500);
      
    },
    function() {
     
      $(this).find('.languages-detail').fadeOut(500);
      
      
    }
  );
//  ここまでlanguagesのホバー







});


 











