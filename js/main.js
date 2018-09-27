$(function($) {

  "use strict";

  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    // Activate menu
    if (wScroll >50) {
      $('.navbar').addClass('active_sc');
    }
    else {
      $('.navbar').removeClass('active_sc');
    };
        
  });

  //smooth scrool
   // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#xenav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });




  // Wait for window load
  $(window).on('load', function() {
     $(".se-pre-con").fadeOut("slow");;
  });


  //feature slider
     var owls = $("#feature-slider");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        items: 2,
        loop: true,
        center: false,
        margin: 0,
        stagePadding: 0,
        dots:false,
        nav:true,


        merge: false,
        mergeFit: true,
        autoWidth: false,
        animateOut:'zoomOutRight',
        animateIn:'zoomInLeft',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
                nav: true
            },
            768: {
                items: 2,
                nav: true,
                loop: true
            }
        },
        navText : ["<i class='fas fa-angle-left fa-2x'></i>","<i class='fas fa-angle-right fa-2x'></i>"]
    });



     
    //testimonial slide
     var owls = $("#testi-slider");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        items: 2,
        loop: true,
        center: false,
        margin: 15,
        stagePadding: 0,
        dots:true,
        nav:false,


        merge: false,
        mergeFit: true,
        autoWidth: false,
        animateOut:'fadeOutDown',
        animateIn:'fadeInDown',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: false,
                loop: true
            }
        },

    });


//hero slider
     var owls = $("#hero-slider");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        items: 1,
        loop: true,
        center: false,
        margin: 0,
        stagePadding: 0,
        dots:true,
        nav:false,

        animateOut:'fadeOutDown',
        animateIn:'fadeInDown',

    });


    //hero text slider
     var owls = $("#text-slider-avaia");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        items: 1,
        loop: true,
        center: false,
        margin: 0,
        stagePadding: 0,
        dots:true,
        nav:false,
        animateOut:'fadeOutDown',
        animateIn:'fadeInDown',

    });






//popup gallery
  $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      }
  });


  



// Isotope for portfolio
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
});



// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.filter-button-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});


//counter up
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });


    // Gets the video src from the data-src on each button

    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    console.log($videoSrc);

      
      
    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function (e) {
        
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
    })
      
      
    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',$videoSrc); 
    })


    //yt player
    $('#video-background').YTPlayer({
        videoId: '7-VvFlwsWic',
        fitToBackground: false,
        mute: true,
        pauseOnScroll: false,
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            wmode: 'transparent',
            branding: 0,
            rel: 0,
            autohide: 0,
            loop: 1,
            origin: window.location.origin
        }
    }); 






});



//wow
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         true,        // default
    offset: 100
  }
  )
wow.init();

//gooogle maps
  // Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 6, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
