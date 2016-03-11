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

//  ここからモーダル
   $('.btn-pricing').click(function() {
   	$('#apply-modal').fadeIn();
   	var id = $(this).parents('.price-column').attr('id');
    var title = $('#' + id).children('h2').text();
    $('#course-select').val(id);
    $('#apply-form').children('h2').text('【' + title + '】に申し込む');
   });

   $('#close-modal').click(function() {
    $('#apply-modal').fadeOut();
  });

 // カルーセルスライダー部分
  $('.carousel').carousel({
	  interval: 2500
	});

// fin
   
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

// コラムの絞り込み
  $('.filter-item').click(function(){
    $('.filter-item').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('id');
    if (id === 'all') {
      $('.column-box').fadeIn();
    } else {
      $('.wrapper-outer').children('.' + id).fadeIn();
      $('.column-box').not('.' + id).fadeOut();
    }
  });
//   fin

// お問い合わせフォーム部分
  $('.contact-form form').submit(function(){
    var error_warning = false;
    $(this).children('input, textarea').each(function(){
      var body = $(this).val();
      if (!body) {
        $(this).prev('.error-message').text('入力してください');
        error_warning = true;
      } else {
        $(this).prev('.error-message').text('');
      }
    });

    if (!error_warning) {
      $('.contact-form').html('<h4>お問い合わせありがとうございます。</h4>');
    }
    return false;
  });
 
 //  fin


});






