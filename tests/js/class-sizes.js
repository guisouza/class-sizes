/*!
 * Class Sizes
 * Author: Felipe Rank
 * Version: 1.0.0
 * URL: https://github.com/raank/class-sizes
 * Licensed under MIT
 */
(function( $ ){
	"use strict";

	$.fn.ClassSizes = function(options) {

		var windowSize	= $(window).width();
		var defaults = {
			'responsive': true,
			'sizes': {
				'xs' : { // Mobiles
					'classe':	'screen-xs',
					'min':		'240',
					'max':		'532',
				},
				'tb' : { // Tablets and iPads
					'classe':	'screen-tb',
					'min':		'533',
					'max':		'767',
				},
				'sm' : {
					'classe':	'screen-sm',
					'min':		'768',
					'max':		'991',
				},
				'md' : {
					'classe':	'screen-md',
					'min':		'992',
					'max':		'1199',
				},
				'lg' : {
					'classe':	'screen-lg',
					'min':		'1200',
					'max':		'1399',
				},
				'bg' : {
					'classe':	'screen-bg',
					'min':		'1400',
					'max':		null, // infinite
				}
			},
			'destroy': [],
			/*
			'classOnSize': {
				"xs": [],
				"tb": [],
				"sm": [],
				"md": [],
				"lg": [],
				"bg": []
			}
			*/
		};

		var sizes	= $.extend( {}, defaults.sizes, options.sizes );
		function GetSetClass( $item ) {
			for ( var i in sizes) {
				if( windowSize >= sizes[i].min && windowSize <= sizes[i].max && sizes[i].max != null ) {
					$item.addClass( sizes[i].classe );
				} else if ( sizes[i].max == null && windowSize >= sizes[i].min ) {
					$item.addClass( sizes[i].classe );
				}
			}
		}

		var destroyitems = $.extend( {}, defaults.destroy, options.destroy );
		function GetDestroyItems( $item ) {
			for ( var i in destroyitems) {
				if( defaults.responsive == true ) {	
					$item.find( destroyitems[i] ).hide();
				} else {
					$item.find( destroyitems[i] ).remove();
				}
			}
		}

		/*
		var classOnSizes = $.extend( {}, defaults.classOnSize, options.classOnSize );
		function addClassOnSize( $item ) {
			for ( var i in classOnSizes ) {
				if( options.classOnSize[i] ){
					$item.find( "." + classOnSizes[i][0] ).addClass( i + "-" + nameClass );
				}
			}
		}
		*/

		return this.each(function() {
			var $element = $(this);

			GetSetClass( $element );
			GetDestroyItems( $element );
			//addClassOnSize( $element );
		});
	}; 
})( jQuery );