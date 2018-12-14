# jquery-snowfall
snow falling effect implemented in jQuery

# Using

```
$(document).ready( function(){
	$.fn.snow({
		flakeChar: [".","*","❅","❆","❄"], 
		minSize: 20,
		maxSize: 60,
		newOn: 200,
		flakeColor: ["#ffffff"],
		durationMillis: null,
		target: ".target-block"
	});
});
```