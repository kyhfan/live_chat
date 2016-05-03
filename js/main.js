
$(function(){
	$(document).on("click", "[href='#']", function(){ return false; });

	$(window).on("beforePageShow", function(event, $afterPage, $beforePage){
		side_nav(false);// 사이드 메뉴 닫기
		popSet();// 레이어 팝업 셋팅

		// 슬릭
		if ($afterPage.find(".autoViewWrap").length){
			/*
			$afterPage.find(".slideWrap").slick({
				dots : true,
				speed : 1500,
				autoplay : true,
				autoplaySpeed : 4000,
				pauseOnHover : false,
				swipe : false,
				arrows : true,
				prevArrow : "<button type=\"button\" class=\"slick-prev\"><span class=\"txt_hidden\">이전</span></button>",
				nextArrow : "<button type=\"button\" class=\"slick-next\"><span class=\"txt_hidden\">다음</span></button>",
				fade : true,
				customPaging : function(e, i){
					return "<button type=\"button\"><span class=\"txt_hidden\">"+i+"</span></button>";
				}
			});
			$(".slick-arrow").hide();
			$(".slick-dots").hide();
			$afterPage.find('.slideWrap').on('beforeChange', function(event, slick, currentSlide, nextSlide){
				if (nextSlide < 2)
				{
					$(".slick-arrow").hide();
					$(".slick-dots").hide();
					$("#bottom_menu").hide();
					$('.slideWrap').slick('slickPlay');
				}else
				{
					$(".slick-arrow").show();
					$(".slick-dots").show();
					$("#bottom_menu").show();
					$('.slideWrap').slick('slickPause');
				}
			});
			*/
			$afterPage.find(".slideWrap").slick({
				dots : true,
				speed : 200,
				prevArrow : "<button type=\"button\" class=\"slick-prev\"><span class=\"txt_hidden\">이전</span></button>",
				nextArrow : "<button type=\"button\" class=\"slick-next\"><span class=\"txt_hidden\">다음</span></button>",
				customPaging : function(e, i){
					return "<button type=\"button\"><span class=\"txt_hidden\">"+i+"</span></button>";
				}
			});
		} else {
			$afterPage.find(".slideWrap_intro1").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left_w.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right_w.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off_w.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_intro2").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off_w.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_intro3").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left_w.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right_w.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off_w.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_intro4").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_plan1_1").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_plan1_2").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_plan1_3").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_plan2_1").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_plan2_2").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_plan2_3").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_plan3_1").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_plan3_2").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_plan3_3").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_package1").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off_w.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_package2").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off_w.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_package3").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off_w.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_package4").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off_w.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_price1").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off_w.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_price2").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				initialSlide : 1,
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off_w.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_price3").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				initialSlide : 2,
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off_w.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap_price4").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%' id='arrow_prev_slide1'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' id='arrow_next_slide1' />",
				initialSlide : 3,
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/dot_off_w.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap2").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' />",
				initialSlide : 1,
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/bach7/dot_off.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap3").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left_w.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%'/>",
				nextArrow : "<img src='images/arrw_right_w.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' />",
				initialSlide : 2,
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/bach7/dot_off.png' /></a></div>";
				}
			});

			$afterPage.find(".slideWrap4").slick({
				dots : true,
				speed : 200,
				prevArrow : "<img src='images/arrw_left.png' style='position:absolute;z-index:1;top:46.9%;margin-left:3%'/>",
				nextArrow : "<img src='images/arrw_right.png' style='position:absolute;z-index:1;top:46.9%;left:94.5%' />",
				initialSlide : 3,
				customPaging : function(e, i){
					return "<div class='txt_hidden'><a href='#'><img src='images/bach7/dot_off.png' /></a></div>";
				}
			});

			// On edge hit
			$('.slideWrap_intro1').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				if (currentSlide == 5)
				{
					$("#arrow_prev_slide1").attr("src","images/arrw_left_w.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right_w.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}else if (currentSlide == 2 || currentSlide == 4 || currentSlide == 7){
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
				}else{
					$("#arrow_prev_slide1").attr("src","images/arrw_left_w.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right_w.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
				}
			});

			// On edge hit
			$('.slideWrap_intro2').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				if (currentSlide == 1)
				{
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
				}else if (currentSlide == 2){
					$("#arrow_prev_slide1").attr("src","images/arrw_left_w.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right_w.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}else if (currentSlide == 4){
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}else if (currentSlide == 5){
					$("#arrow_prev_slide1").attr("src","images/arrw_left_w.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right_w.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}else{
					$("#arrow_prev_slide1").attr("src","images/arrw_left_w.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right_w.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
				}
			});

			// On edge hit
			$('.slideWrap_intro3').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				if (currentSlide == 1 || currentSlide == 2)
				{
					$("#arrow_prev_slide1").attr("src","images/arrw_left_w.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right_w.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}else{
					$("#arrow_prev_slide1").attr("src","images/arrw_left_w.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right_w.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
				}
			});

			// On edge hit
			$('.slideWrap_intro4').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				if (currentSlide == 2 || currentSlide == 4 || currentSlide == 11){
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
				}else if (currentSlide == 10){
					$("#arrow_prev_slide1").attr("src","images/arrw_left_w.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right_w.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
				}else{
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}
			});

			// On edge hit
			$('.slideWrap2').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
			});

			// On edge hit
			$('.slideWrap3').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
			});

			// On edge hit
			$('.slideWrap4').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
			});

			// On edge hit
			$('.slideWrap_plan1_1').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				if (currentSlide == 2)
				{
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
				}else if (currentSlide == 3) {
					$("#arrow_prev_slide1").attr("src","images/arrw_left_w.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right_w.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}else{
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}
			});

			// On edge hit
			$('.slideWrap_plan1_2').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				if (currentSlide == 3) {
					$("#arrow_prev_slide1").attr("src","images/arrw_left_w.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right_w.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
				}else{
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}
			});
			// On edge hit
			$('.slideWrap_plan1_3').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				if (currentSlide == 1 || currentSlide == 2)
				{
					$("#arrow_prev_slide1").attr("src","images/arrw_left_w.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right_w.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
				}else if (currentSlide == 3) {
					$("#arrow_prev_slide1").attr("src","images/arrw_left_w.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right_w.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}else{
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}
			});

			// On edge hit
			$('.slideWrap_plan2_1').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				if (currentSlide == 3) {
					$("#arrow_prev_slide1").attr("src","images/arrw_left_w.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right_w.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}else{
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}
			});

			// On edge hit
			$('.slideWrap_plan2_2').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				if (currentSlide == 3) {
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
				}else{
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}
			});

			// On edge hit
			$('.slideWrap_plan2_3').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				if (currentSlide == 1 || currentSlide == 2) {
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
				}else{
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}
			});

			// On edge hit
			$('.slideWrap_plan3_1').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				if (currentSlide == 2) {
					$("#arrow_prev_slide1").attr("src","images/arrw_left_w.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right_w.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
				}else{
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}
			});

			// On edge hit
			$('.slideWrap_plan3_2').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				if (currentSlide == 1 || currentSlide == 2) {
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
				}else{
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}
			});

			// On edge hit
			$('.slideWrap_plan3_3').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				if (currentSlide == 1 || currentSlide == 2 || currentSlide == 3) {
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
				}else{
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}
			});

			// On edge hit
			$('.slideWrap_package1').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				if (currentSlide == 5 || currentSlide == 6) {
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}else{
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
				}
			});

			// On edge hit
			$('.slideWrap_package2').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				if (currentSlide == 4 || currentSlide == 5) {
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				}else{
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
				}
			});

			// On edge hit
			$('.slideWrap_package3').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
				$("#arrow_next_slide1").attr("src","images/arrw_right.png");
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
			});

			// On edge hit
			$('.slideWrap_package4').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				if (currentSlide == 1 || currentSlide == 2 || currentSlide == 3) {
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
				}else{
					$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
					$("#arrow_next_slide1").attr("src","images/arrw_right.png");
					$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
					$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
				}
			});

			// On edge hit
			$('.slideWrap_price1').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
				$("#arrow_next_slide1").attr("src","images/arrw_right.png");
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
			});

			// On edge hit
			$('.slideWrap_price2').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
				$("#arrow_next_slide1").attr("src","images/arrw_right.png");
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
			});

			// On edge hit
			$('.slideWrap_price3').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
				$("#arrow_next_slide1").attr("src","images/arrw_right.png");
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
			});

			// On edge hit
			$('.slideWrap_price4').on('afterChange', function(event, slick, currentSlide){
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on.png");
				$("#arrow_prev_slide1").attr("src","images/arrw_left.png");
				$("#arrow_next_slide1").attr("src","images/arrw_right.png");
				$(".slick-dots > li > div > a > img").attr("src","images/dot_off_w.png");
				$(".slick-active > div > a > img").attr("src","images/dot_on_w.png");
			});

			$(".slideWrap_plan1_1 > ul > .slick-active > div > a > img").attr("src","images/dot_on.png");
			$(".slideWrap_plan1_2 > ul > .slick-active > div > a > img").attr("src","images/dot_on.png");
			$(".slideWrap_plan1_3 > ul > .slick-active > div > a > img").attr("src","images/dot_on.png");
			$(".slideWrap_plan2_1 > ul > .slick-active > div > a > img").attr("src","images/dot_on.png");
			$(".slideWrap_plan2_2 > ul > .slick-active > div > a > img").attr("src","images/dot_on.png");
			$(".slideWrap_plan2_3 > ul > .slick-active > div > a > img").attr("src","images/dot_on.png");
			$(".slideWrap_plan3_1 > ul > .slick-active > div > a > img").attr("src","images/dot_on.png");
			$(".slideWrap_plan3_2 > ul > .slick-active > div > a > img").attr("src","images/dot_on.png");
			$(".slideWrap_plan3_3 > ul > .slick-active > div > a > img").attr("src","images/dot_on.png");
			$(".slideWrap_intro1 > ul > .slick-active > div > a > img").attr("src","images/dot_on_w.png");
			$(".slideWrap_intro2 > ul > .slick-active > div > a > img").attr("src","images/dot_on_w.png");
			$(".slideWrap_intro3 > ul > .slick-active > div > a > img").attr("src","images/dot_on_w.png");
			$(".slideWrap_intro4 > ul > .slick-active > div > a > img").attr("src","images/dot_on.png");
			$(".slideWrap_package1 > ul > .slick-active > div > a > img").attr("src","images/dot_on_w.png");
			$(".slideWrap_package2 > ul > .slick-active > div > a > img").attr("src","images/dot_on_w.png");
			$(".slideWrap_package3 > ul > .slick-active > div > a > img").attr("src","images/dot_on_w.png");
			$(".slideWrap_package4 > ul > .slick-active > div > a > img").attr("src","images/dot_on_w.png");
			$(".slideWrap_price1 > ul > .slick-active > div > a > img").attr("src","images/dot_on_w.png");
			$(".slideWrap_price2 > ul > .slick-active > div > a > img").attr("src","images/dot_on_w.png");
			$(".slideWrap_price3 > ul > .slick-active > div > a > img").attr("src","images/dot_on_w.png");
			$(".slideWrap_price4 > ul > .slick-active > div > a > img").attr("src","images/dot_on_w.png");

			$afterPage.find(".slideWrap_auto").slick({
				dots : false,
				speed : 500,
				autoplay : true,
				lazyLoad : "progressive",
				autoplaySpeed : 3000,
				arrows : false,
				customPaging : function(e, i){
					return "<button type=\"button\"><span class=\"txt_hidden\">"+i+"</span></button>";
				}
			});
			/*
			$afterPage.find(".slideWrap_auto_package").slick({
				dots : true,
				speed : 500,
				autoplay : true,
				autoplaySpeed : 2000,
				fade : false,
				arrows : true,
				//easing : "easeOutCubic",
				prevArrow : "<button type=\"button\" class=\"slick-prev\"><span class=\"txt_hidden\">이전</span></button>",
				nextArrow : "<button type=\"button\" class=\"slick-next\"><span class=\"txt_hidden\">다음</span></button>",
				customPaging : function(e, i){
					return "<button type=\"button\"><span class=\"txt_hidden\">"+i+"</span></button>";
				}
			});
			*/
		}
	});

	// 사이드 메뉴
	function side_nav(open){
		if (open){
			$("[data-role='right']").addClass("open");
			$("html").addClass("navOpen");
		} else {
			$("[data-role='right']").removeClass("open");
			$("html").removeClass("navOpen");
		}
	}
	$(document).on("click", "body", function(){
		side_nav(false);
	});
	$(document).on("click", ".rightNavOpener", function(e){
		side_nav(true);
		e.stopPropagation();
	});
	$(document).on("click", "[data-role='right'] .closer", function(){
		side_nav(false);
	});
	$(document).on("click", "[data-role='right']", function(e){
		e.stopPropagation();
	});

	// 전체화면
	$(document).on("click", ".btn_view_full", function(){
		var obj = document.documentElement;
		if (obj.requestFullscreen)   
			if (document.fullScreenElement){
				document.cancelFullScreen();
			} else {
				obj.requestFullscreen();
			}
		else if (obj.msRequestFullscreen)
			if (document.msFullscreenElement){
				document.msExitFullscreen();
			} else {
				obj.msRequestFullscreen();
			}
		else if (obj.mozRequestFullScreen)
			if (document.mozFullScreenElement){
				document.mozCancelFullScreen();
			} else {
				obj.mozRequestFullScreen();
			}
		else if (obj.webkitRequestFullscreen)
			if (document.webkitFullscreenElement){
				document.webkitCancelFullScreen();
			} else {
				obj.webkitRequestFullscreen();
			}
	});

	// 레이어 팝업
	function popSet(){
		$(".popupWindow")
			.wrap('<div class="popWrap"></div>')
			.append('<a href="#" class="popCloseBtn popClose"><span class="txt_hidden">닫기</span></a>');
	}
	function popOpen($target){
		$target.closest(".popWrap").addClass("open");
		$("html").addClass("popOpen");
	}
	function popClose($target){
		$target.closest(".popWrap").removeClass("open");
		if ($(".popWrap.open").length<=0){
			$("html").removeClass("popOpen");
		}
	}
	$(document).on("click", "[data-popup]", function(){
		$target = $($(this).attr("data-popup"));
		if ($target.closest(".popWrap").hasClass("open")){
			popClose($target);
		} else {
			popOpen($target);
		}
	});
	$(document).on("click", ".popupWindow .popClose", function(){
		popClose($(this).closest(".popupWindow"));
	});

	// 견적보기
	$(document).on("click", "[data-popup=\"#pop_price\"]", function(){
		if ($(this).hasClass("active")){
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
			$(".btn_package_pric > img").attr("src","images/bact/btn_package_pric_on.png");
		}
	});
	$(document).on("click", "#pop_price .popClose", function(){
		$("[data-popup=\"#pop_price\"]").removeClass("active");
		$(".btn_package_pric > img").attr("src","images/bact/btn_package_pric_off.png");
	});

	$(document).on("touchstart", ".autoViewWrap .subMainList li a", function(){
		$(this).addClass("hover");
	}).on("touchend", ".autoViewWrap .subMainList li a", function(){
		$(this).removeClass("hover");
	});

	$(document).on("touchstart", ".submain_btn li a", function(){
		$(this).addClass("hover");
	}).on("touchend", ".submain_btn li a", function(){
		$(this).removeClass("hover");
	});

	// 가격 페이지 링크
	$(document).on("click", ".priceList a:not(.link)", function(){
		var $this = $(this);
		$(".pajax-cover").addClass("show");
		$this.find(".circleWrap").css("opacity", "1");
		setTimeout(function(){
			$this.find(".circleWrap").css("opacity", "0");
			setTimeout(function(){
				$this.siblings(".link").trigger("click");
			}, 500);
		}, 2000);
	});
});
