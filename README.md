# Class Sizes #
---
Add class depending on the width of the document.

#### Usage: ####
---
```javascript
$(function(){
	$("html").ClassSizes({
		classes: {
			/*
			type: {
				classe: "CLASS FOR ITEM",
				min:	"MIN VALUE WIDTH OF HTML",
				max:	"MAX VALUE WIDTH OF HTML",
				
			}
			*/
			xs: { // mobile
				classe: "screen-xs",
				min:	"240",
				max:	"532"
			},
			tb: {
				classe: "screen-tb",
				min:	"533",
				max:	"767"
			},
			sm: {
				classe: "screen-sm",
				min:	"768",
				max:	"991"
			},
			md: {
				classe: "screen-md",
				min:	"992",
				max:	"1199"
			},
			lg: {
				classe: "screen-lg",
				min:	"1200",
				max:	"1399",
			},
			bg: {
				classe: "screen-bg",
				min:	"1400",
				max:	null // infinite value
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
