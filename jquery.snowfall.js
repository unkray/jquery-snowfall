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
	var interval=setInterval(function(){
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