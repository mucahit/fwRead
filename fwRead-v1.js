/*
	Mücahit Tütüncü,
	mtutuncu.com,
	fwRead.js,
	28.07.13 / 14:32,
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
		'pWidth'		:	'900px'
	},configs);
		return this.each(function(){
			$(config.fwReadButton).click(function(){
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
				$(config.contentObj + " " + config.contentP).css({
					'font-size'		:	config.fontSize,
					'line-height'	:	config.lineHeight,
					'width'			:	config.pWidth,
					'margin'		:	'auto',
					});
				$(config.fwReadButton).click(function(){
					$(config.fwReadButton).attr('href','');
				});
			});
		});
	}
});