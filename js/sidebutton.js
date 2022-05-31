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
			if (localStorage.getItem('noanimation') === '0') {
				var circlecolor={"value": ['#0fc', '#0ff', '#ccc', '#ffa500', '#7b5d5f', '#ff945c', '#cfb7c4']};
				var linecolor="#ff945c";
				particlesJS(circlecolor, linecolor);
			}
			return;
		} else {
			document.body.classList.add('bright');
			localStorage.setItem('bright','1');
			if (localStorage.getItem('noanimation') === '0') {
				var circlecolor={"value": ['#999']};
				var linecolor="#999";
				particlesJS(circlecolor, linecolor);
			}
			return;
		}
	})
	// 特效函数
	function particlesJS(circlecolor, linecolor) {
		// require(['/js/particles.js'], function(particlesJS) {
			window.particlesJS('particles-js',

			{
				"particles": {
				"number": {
					"value": 80,
					"density": {
					"enable": true,
					"value_area": 800
					}
				},
				"color": circlecolor,
				"shape": {
					"type": "circle",
					"stroke": {
					"width": 0,
					"color": "#000000"
					},
					"polygon": {
					"nb_sides": 5
					},
					"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
					}
				},
				"opacity": {
					"value": 0.5,
					"random": false,
					"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
					}
				},
				"size": {
					"value": 5,
					"random": true,
					"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
					}
				},
				"line_linked": {
					"enable": true,
					"distance": 150,
					"color": linecolor,
					"opacity": 0.4,
					"width": 1
				},
				"move": {
					"enable": true,
					"speed": 6,
					"direction": "none",
					"random": false,
					"straight": false,
					"out_mode": "out",
					"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
					}
				}
				},
				"interactivity": {
				"detect_on": "canvas",
				"events": {
					"onhover": {
					"enable": true,
					"mode": "repulse"
					},
					"onclick": {
					"enable": true,
					"mode": "push"
					},
					"resize": true
				},
				"modes": {
					"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
					},
					"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
					},
					"repulse": {
					"distance": 200
					},
					"push": {
					"particles_nb": 4
					},
					"remove": {
					"particles_nb": 2
					}
				}
				},
				"retina_detect": true,
				"config_demo": {
				"hide_card": false,
				"background_color": "#b61924",
				"background_image": "",
				"background_position": "50% 50%",
				"background_repeat": "no-repeat",
				"background_size": "cover"
				}
			}

			);
		// })
	}
})(jQuery);