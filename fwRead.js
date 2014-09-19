/*
	Mücahit Tütüncü,
	mtutuncu.com,
	fwRead.js,
	v1 / 28.07.13 / 14:32,
	v1.2 / 29.07.13 / 00:42,
	v1.3 / 30.07.13 / 03:40,
	v1.3 / 30.07.13 / 19:40,
*/
$(function(){
	$.fn.fwRead = function(configs){
	var config = $.extend({
		'fontSize'		:	'',
		'lineHeight'	:	'',
		'fwReadButton'	:	'',
		'contentObj'	:	'',
		'contentP'		:	'',
		'textColor'		:	'#000',
		'backColor'		:	'#fff',
		'pWidth'		:	'900px',
		'effect'		:	'',
		'effectSpeed'	:	'0'
	},configs);
		return this.each(function(){
			$(config.fwReadButton).click(function(){
			$(config.contentObj).hide();
				$(config.contentObj).css({
					'width'				:	'100%',
					'height'			:	'auto',	
					'min-height'		:	'100%',
					'position'			:	'absolute',
					'margin'			:	'0',
					'top'				:	'0',
					'left'				:	'0',
					'padding-top'		:	'30px',
					'padding-bottom'	:	'100px',
					'background-color'	:	config.backColor,
					'border-radius'		:	'0',
					'border'			:	'none',
					'z-index'			:	'999999',
					'color'			:	config.textColor,
					});
				$(config.contentObj + " a").css({
					'color'			:	config.textColor,
					});
                $(config.contentObj).append("<div class='fontSize'><a class='fontB'>font+</a><a class='fontK'>font-</a></div>");
                $(".fontSize").css({
                    "cursor":"pointer",
                    "position":"absolute",
                    "top":"20px",
                    "left":"20px",
                    "z-index":"9999999"
                });
                $(".fontSize a").css({
                    "padding":"5px",
                    "margin-right":"2px",
                    "color":config.textColor,
                });
                $(".fontSize a").hover(function(){
                     $(this).css({
                        "background-color":config.textColor,
                        "color":config.backColor,
                     });
                },function(){
                     $(this).css({
                        "background-color":config.backColor,
                        "color":config.textColor,
                     });
                });
				$(".fontSize .fontB").click(function(){
				if(config.fontSize >= 28){
					config.fontSize = 28;
					alert("Yazı fontu yeterince büyük.");
				}else{
					config.fontSize++;
					config.lineHeight++;
					$(config.contentObj + " " + config.contentP).css({
						'font-size'		:	config.fontSize+"px",
						'line-height'		:	config.lineHeight+"px",
					});
				}
				});
				$(".fontSize .fontK").click(function(){
				if(config.fontSize	<= 11){
					config.fontSize = 11;
					alert("Yazı fontu yeterince küçük.");
				}else{
						config.fontSize--;
						config.lineHeight--;
					$(config.contentObj + " " + config.contentP).css({
						'font-size'			:	config.fontSize+"px",
						'line-height'		:	config.lineHeight+"px",
					});
				}
				});
				$(config.contentObj + " " + config.contentP).css({
					'font-size'			:	config.fontSize+"px",
					'line-height'		:	config.lineHeight+"px",
					'width'				:	config.pWidth+"px",
					'margin'			:	'auto',
					'background-color'	:	config.backColor
					});
				$(config.fwReadButton).click(function(){
					$(config.fwReadButton).attr('href','');
				});
				if(config.effect == 'show'){
					$(config.contentObj).show(config.effectSpeed);
				}else if(config.effect == 'fadeIn'){
					$(config.contentObj).fadeIn(config.effectSpeed);
				}else{
					$(config.contentObj).show();
				}
			});
		});
	}
});