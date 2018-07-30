$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:4,
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:3
    //     },
    //     1000:{
    //         items:10
    //     }
    // }
})

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.gallery-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.gallery-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
