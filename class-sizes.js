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

		var defaults = {
			'classes': {
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
			}
		};

		var settings	= $.extend( {}, defaults.classes, options );
		var windowSize	= $(window).width();

		function GetSetClass( item ) {
			for ( var i in settings ) {
				if( windowSize >= settings[i].min && windowSize <= settings[i].max ) {
					$( item ).addClass( settings[i].classe );
				}
			}
		}
		return this.each(function() {
			GetSetClass( this );
		});
	}; 
})( jQuery );