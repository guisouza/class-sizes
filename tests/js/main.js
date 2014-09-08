(function( $ ){
	$("html").ClassSizes({
		sizes: {
			lg: {
				classe: "screen-lg",
				min:    "1200",
				max:    "1499"
			},
			bg: {
				classe: "screen-bg",
				min:    "1500",
				max:    null
			}

		},

		destroy: [
			'.item1',
			'#item3'
		],
		classOnSize: {
			"bg": [ "demo-1" ], // bg-about-ss
			"md": [ "demo-2" ],
		}
	});
})( jQuery );