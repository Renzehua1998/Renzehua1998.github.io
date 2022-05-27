require([], function (){

	var isMobileInit = false;
	var loadMobile = function(){
		require(['/js/mobile.js'], function(mobile){
			mobile.init();
			isMobileInit = true;
		});
	}
	var isPCInit = false;
	var loadPC = function(){
		require(['/js/pc.js'], function(pc){
			pc.init();
			isPCInit = true;
		});
	}

	if (!localStorage.hasOwnProperty('content')) {  // 请求搜索资源
		window.fetch('content.json', {
			method: 'get',
		}).then((res) => {
			return res.json()
		}).then((data) => {
			// data.forEach((em) => {
			// em.isShow = true
			// })
			data = JSON.stringify(data);
			localStorage.setItem('content',data)
		}).catch((err) => {
			// window.jsonFail = true
			console.log('未安装hexo-generator-json-content模块')
		});
	}

	jQuery("#local-search-input").val('') // 清除搜索内容

	if ((localStorage.getItem('noanimation') === '1')) {  // 全局特效变量
		$("#live2d-widget").css('display', 'none');  // live2d隐藏
	} else {
		$("#animation").attr('checked', 'true');
		$(".live2d-widget-container").css('display', 'inline');  // live2d显示
		if (localStorage.getItem('bright') === '1') {
			var circlecolor={"value": ['#999']};
			var linecolor="#999";
			particlesJS(circlecolor, linecolor);
		}else{
			var circlecolor={"value": ['#0fc', '#0ff', '#ccc', '#ffa500', '#7b5d5f', '#ff945c', '#cfb7c4']};
			var linecolor="#ff945c";
			particlesJS(circlecolor, linecolor);
		}
	}
	function particlesJS(circlecolor, linecolor) {
		require(['/js/particles.js'], function(particlesJS) {
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
		})
	}
	var browser={
	    versions:function(){
	    var u = window.navigator.userAgent;
	    return {
	        trident: u.indexOf('Trident') > -1, //IE内核
	        presto: u.indexOf('Presto') > -1, //opera内核
	        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
	        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
	        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
	        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
	        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
	        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者安卓QQ浏览器
	        iPad: u.indexOf('iPad') > -1, //是否为iPad
	        webApp: u.indexOf('Safari') == -1 ,//是否为web应用程序，没有头部与底部
	        weixin: u.indexOf('MicroMessenger') == -1 //是否为微信浏览器
	        };
	    }()
	}

	$(window).bind("resize", function(){
		if(isMobileInit && isPCInit){
			$(window).unbind("resize");
			return;
		}
		var w = $(window).width();
		if(w >= 700){
			loadPC();
		}else{
			loadMobile();
		}
	});

	if(browser.versions.mobile === true || $(window).width() < 700){
		loadMobile();
	}else{
		loadPC();
	}
	// 字符字母信息
	console.log('\n\
	 _       __     __                   \n\
	| |     / /__  / /________  ____ ___ \n\
	| | /| / / _ \\/ / ___/ __ \\/ __ `__ \\\n\
	| |/ |/ /  __/ / /__/ /_/ / / / / / /\n\
	|__/|__/\\___/_/\\___/\\____/_/ /_/ /_/ \n\
	 _____                   \n\
	|_   _|                       ____                \n\
	  | |     __ _ _ __ ___      / __ \\___  ____  ____™\n\
	  | |    / _` | \'_ ` _ \\    / /_/ / _ \\/ __ \\/_  /\n\
	 _| |_  | (_| | | | | | |  / _, _/  __/ / / / / /_\n\
	|_____|  \\__,_|_| |_| |_| /_/ |_|\\___/_/ /_/ /___/\n\
	')
});