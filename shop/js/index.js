$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:1000,
        
    });
 });


//Accordion copy 
 $(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});


$('.your-class').slick({
	autoplay:true,
	autoplaySpeed:1500,
	slidesToShow: 3,
	slidesToScroll:4,
	nav:true,
	dots:true,
	centerMode: true,
		  centerPadding: '40px',

	responsive: [
	  {
		breakpoint: 768,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 3
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 1
		}
	  }
	]
  });