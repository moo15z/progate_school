$(function() {

//ページ内スクロール
    $("header a").click(function () {
        var i = $(".header-menu a").index(this)
        var p = $(".scroll").eq(i).offset().top; 
        $('html,body').animate({ scrollTop: p }, 500);
        return false;
    });
// fin


 

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
// fin




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
//  fin

//  ここからコラムの画像のホバー
   $('.img-zoom').hover(
    function() {
    	console.log($(this).addClass('zoom'))

      $(this).addClass('zoom');
      $(this).children('.zoom-black').fadeIn(300);
      
    },
    function() {
      $(this).removeClass('zoom');
      $(this).children('.zoom-black').fadeOut(300);
      
      
    }
  );





//  fin


});


 











