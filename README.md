# jquery-snowfall
snow falling effect implemented in jQuery

Fork: https://github.com/kopipejst/jqSnow

# Using

```
$(document).ready( function(){
	$.fn.snow({
		flakeChar: [".","*","❅","❆","❄"], // the HTML char to animate
		minSize: 10, // min size of snowflake, 10 by default
		maxSize: 20, // max size of snowflake, 20 by default
		newOn: 200, // frequency in ms of appearing of new snowflake, 500 by default
		flakeColor: ["#ffffff"], // array of colors , #FFFFFF by default
		durationMillis: null, // stop effect after duration
		target: ".target-block"
	});
});
```