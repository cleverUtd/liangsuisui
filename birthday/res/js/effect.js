$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
       var browser = {
        versions : function() {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {//移动终端浏览器版本信息                                 
            trident : u.indexOf('Trident') > -1, //IE内核                                 
            presto : u.indexOf('Presto') > -1, //opera内核                                 
            webKit : u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核                                 
            gecko : u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核                                
            mobile : !!u.match(/AppleWebKit.*Mobile.*/)
                    || !!u.match(/AppleWebKit/), //是否为移动终端                                 
            ios : !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端                 
            android : u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器                                 
            iPhone : u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器                    
            iPad: u.indexOf('iPad') > -1, //是否iPad       
            webApp : u.indexOf('Safari') == -1,//是否web应该程序，没有头部与底部
            google:u.indexOf('Chrome')>-1
        };
    }(),
    	language : (navigator.browserLanguage || navigator.language).toLowerCase()
    };

     function isPhone() {
     	return (browser.versions.ios || browser.versions.android);
     }
		
		var vw;
		$(window).resize(function(){
 			 vw  = $(window).width();
 			 hvw = vw/2;
 			if(vw <= 360) {
 				$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
 				$('#b33').animate({top:240, left: hvw-150},500);
				$('#b44').animate({top:240, left: hvw-50},500);
				$('#b55').animate({top:240, left: hvw+50},500);
 			} else {
 				$('#b11').animate({top:240, left: hvw-350},500);
				$('#b22').animate({top:240, left: hvw-250},500);
				$('#b33').animate({top:240, left: hvw-150},500);
				$('#b44').animate({top:240, left: hvw-50},500);
				$('#b55').animate({top:240, left: hvw+50},500);
				$('#b66').animate({top:240, left: hvw+150},500);
				$('#b77').animate({top:240, left: hvw+250},500);
 			}
			
			
		});

	

	// setTimeout(function(){
	// 	
	// }, 10000);
   if(isPhone() == false) {
   	S.init();
   	// startFire();
   	// loop();
   } else {
   		$('#turn_on').fadeIn('slow');
   }
	// $('#cake1').fadeIn('slow');

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');

		if(isPhone()) {
			$('body').addClass('peach');
			$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		  });
		} else {
			 $('body').addClass('peach');
			 $('#turn_on').fadeOut('slow');
			 
			setTimeout(function(){
					 $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		 			$('#bulb_red').addClass('bulb-glow-red-after');
		            $('#bulb_blue').addClass('bulb-glow-blue-after');
		            $('#bulb_green').addClass('bulb-glow-green-after');
		            $('#bulb_pink').addClass('bulb-glow-pink-after');
		            $('#bulb_orange').addClass('bulb-glow-orange-after');
		            $('body').css('backgroud-color','#FFF');
		            $('body').addClass('peach-after');
		            $('#bannar_coming').fadeIn('slow');
	}, 15000)
		}
	});

	$('#play').click(function(){
        if(isPhone()) {
        	var audio = $('.song')[1];
            audio.play();
        }
		
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(25000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		var delay = 10000;
		if(isPhone()) {
			delay = 20000;
		}
		$(this).fadeOut('slow').delay(delay).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},15000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		var delay = 15000;
		if(isPhone()) {
			delay = 20000;
		}
		$(this).fadeOut('slow').delay(delay).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$('.fuego').fadeIn('slow');

		$(this).fadeOut('slow').delay(15000).promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

	$('#blow_candle').click(function(){
		
		$('#blow_candle').fadeOut('slow');
		$('#bulb_yellow').hide();
		$('#bulb_red').hide();
		$('#bulb_blue').hide();
		$('#bulb_green').hide();
		$('#bulb_pink').hide();
		$('#bulb_orange').hide();
		
		//after 
		$('body').removeClass('peach');
		$('body').removeClass('peach-after');
		
		
		if(isPhone() == false) {
			
			$('.fuego').fadeOut('slow');
			setTimeout(function(){
				loop();
		        $('.cake').fadeOut('slow');
			},4000);
			// $('#cake1').fadeIn('slow');
		} else {
			$('.cake').hide('slow');
			$('.fuego').hide('slow');
			$(this).fadeOut('slow').delay(4000).promise().done(function(){
			$('#cake1').fadeIn('slow');
		});
			
		}

		// $(this).fadeOut('slow').delay(5000).promise().done(function(){
		// 	$('#wish_message').fadeIn('slow');
		// });
	});

		
	$('#wish_message').click(function(){
		console.log('userAgent===>' + navigator.userAgent.toLowerCase())
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22');
		$('#b3').attr('id','b33');
		$('#b4').attr('id','b44');
		$('#b5').attr('id','b55');
		$('#b6').attr('id','b66');
		$('#b7').attr('id','b77');

		var vw  = $(window).width();
 		var hvw = vw/2;
 		if(isPhone()) { //手机访问
 			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
 			

 			$('#b11').hide();
 			$('#b22').hide();
 			$('#b66').hide();
 			$('#b77').hide();

 			$('#b33').animate({top:240, left: hvw-170},2000);
			$('#b44').animate({top:200, left: hvw-50},2000);
			$('#b55').animate({top:240, left: hvw+60},2000); 
			
		} else {
 			$('#b11').animate({top:240, left: hvw-350},1500);
			$('#b22').animate({top:240, left: hvw-250},1500);
			$('#b33').animate({top:240, left: hvw-150},2000);
			$('#b44').animate({top:200, left: hvw-50},2000);
			$('#b55').animate({top:240, left: hvw+50},2000);
			$('#b66').animate({top:240, left: hvw+150},1500);
			$('#b77').animate({top:240, left: hvw+250},1500);
 		}
 		$('#b33 h2').html('梁');	
		$('#b44 h2').html('穗');
		$('#b55 h2').html('穗');

		// $('#b11').animate({top:240, left: vw-350},500);
		// $('#b22').animate({top:240, left: vw-250},500);
		// $('#b33').animate({top:240, left: vw-150},500);
		// $('#b44').animate({top:240, left: vw-50},500);
		// $('#b55').animate({top:240, left: vw+50},500);
		// $('#b66').animate({top:240, left: vw+150},500);
		// $('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		var delay = 10000;
		if(isPhone()) {
			delay = 20000;
		}
		$(this).fadeOut('slow').delay(delay).promise().done(function(){
			$('#blow_candle').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');