/**
 * jquery-snowfall - jQuery Snow Effect Plugin
 *
 * Available under GPL licence
 *
 * @version 1.0 (13. Dec 2018)
 * @author Andrey Shabalin
 * @requires jQuery
 * @see https://github.com/unkray/jquery-snowfall
 *
 * @params flakeChar - the HTML char to animate
 * @params minSize - min size of snowflake, 10 by default
 * @params maxSize - max size of snowflake, 20 by default
 * @params newOn - frequency in ms of appearing of new snowflake, 500 by default
 * @params flakeColors - array of colors , #FFFFFF by default
 * @params durationMillis - stop effect after duration
 * @params target - target block (defaulf: document)
 * @example $.fn.snow({ flakeChar: [".","*","❅","❆","❄"], minSize: 20, maxSize: 60, newOn: 200, flakeColor: ["#ffffff"], durationMillis: null, target: ".target-block" });
 */

(function($){
	$.fn.snow=function(options){
	var defaults = {
			flakeChar: ["❄"],
			minSize: 10,
			maxSize: 30,
			newOn: 500,
			flakeColor: "#FFFFFF",
			target: document
		},
		options = $.extend({},defaults,options),
		documentHeight = $(options.target).height(),
		documentWidth = $(options.target).width(),
		getRandomInt = function(min,max){ return Math.floor(Math.random() * (max - min + 1)) + min; };
	$(options.target).prepend('<div id="snowfall" />');
	var interval = setInterval(function(){
		var startPositionLeft = Math.random() * documentWidth - 100,
				startOpacity = 0.9 + Math.random(),
				sizeFlake = options.minSize + Math.random() * options.maxSize,
			endPositionTop = documentHeight - 40,
			endPositionLeft = startPositionLeft - 100 + Math.random() * 200,
			durationFall = documentHeight * 10 + Math.random() * 5000,
				$flake = $('<div id="flake" />').css({
					'position':'absolute',
					'top':'-50px',
					'z-index':'9'
				}).html(options.flakeChar[getRandomInt(0,options.flakeChar.length)]);
			
		$flake.clone()
				.prependTo('#snowfall')
				.css({
					left: startPositionLeft,
					opacity: startOpacity,
					'font-size': sizeFlake,
					color: options.flakeColor
				}).animate(
					{
						top: endPositionTop,
						left: endPositionLeft,
						opacity: 0.1
					}, 
					durationFall,
					'linear',
					function(){
						$(this).remove();
					}
				);
		},
		options.newOn);
	};
})(jQuery);