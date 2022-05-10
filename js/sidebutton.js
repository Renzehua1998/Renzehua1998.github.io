(function($) { 
	// When to show the scroll link
	// higher number = scroll link appears further down the page   
	var upperLimit = 1000;
	
	// Our scroll link element
	var scrollElem = $('#totop');
	var scrollElem2 = $('#todown');
	var scrollElem3 = $('#changebg');
   
	// Scroll to top speed
	var scrollSpeed = 500;
   
	// Show and hide the scroll to top link based on scroll position   
	scrollElem.hide();
	$(window).scroll(function () {            
		var scrollTop = $(document).scrollTop();       
		if ( scrollTop > upperLimit ) {
			$(scrollElem).stop().fadeTo(300, 1); // fade back in           
		}else{       
			$(scrollElem).stop().fadeTo(300, 0); // fade out
		}
	});
	scrollElem2.hide();
	$(window).scroll(function () {            
		var scrollTop = $(document).scrollTop();       
		if ( scrollTop > upperLimit ) {
			$(scrollElem2).stop().fadeTo(300, 1); // fade back in           
		}else{       
			$(scrollElem2).stop().fadeTo(300, 0); // fade out
		}
	});

	// Scroll to top animation on click
	$(scrollElem).click(function(){
		$('html, body').animate({scrollTop:0}, scrollSpeed); return false;
	});

	// Scroll to bottom animation on click
	$(scrollElem2).click(function(){
		var scrollBottom=$(document).height();
		$('html, body').animate({scrollTop:scrollBottom}, scrollSpeed); return false;
	});

	// change background
	$(scrollElem3).click(function(){
		// $("body").css("background", "#fff").css("color", "#000")
		// $(".article.article-type-post").css('margin', '0px 0px 0px 0px;');
		// 浅色模式设置
		var body = document.body;
		if(body.classList.contains('bright')){
			document.body.classList.remove('bright');
			localStorage.setItem('bright','0');
			return;
		} else {
			document.body.classList.add('bright');
			localStorage.setItem('bright','1');
			return;
		}
	})
})(jQuery);