$(document).ready(function() {
	$('#pagepiling').pagepiling({
		menu: false,
		direction: 'vertical',
		verticalCentered: true,
		//				sectionsColor: [],
		anchors: ['intro', 'about', 'ptsd', 'vanguard'],
		scrollingSpeed: 700,
		easing: 'swing',
		loopBottom: false,
		loopTop: false,
		css3: true,
		navigation: false,
		normalScrollElements: null,
		normalScrollElementTouchThreshold: 5,
		touchSensitivity: 5,
		keyboardScrolling: true,
		sectionSelector: '.section',
		animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){
		},
		afterLoad: function(anchorLink, index){
		},
		afterRender: function(){
		},
	});
});
