# Class Sizes #
---
Add class depending on the width of the document.

#### Usage: ####
---
```javascript
$(function(){
	$("html").ClassSizes({
		classes: {
			lg: {
				classe: "screen-lg",  // name of class for size
				min:	"1200",      // minimal value for add class ( min-width: 1200px )
				max:	"1400",     // max value for add class ( max-width: 1400px )
			}
		}
	});
});
```

### Updates ###
---

1.0.0 - Created plugin.

Follow us [@raank92][1]

### License ##
---
MIT

[1]: https://twitter.com/raank92