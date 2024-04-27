jQuery(document).ready(function($) {

    // hero section modal video start
        $(".hero-section-button .play-icon").modalVideo();
        $(".hero-section-button .play-icon").on('click', function() {
            return false;
        });
    // hero section modal video end

    // portfolio section carousel start
        $(".portfolio-section-carousel").owlCarousel({
            items: 3,
            loop: true,
            margin: 30,
        });    
    // portfolio section carousel end

    // textimonial section owlcarousel start
        $(".testimonial-owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
        });
        // testmonial logo carrowsel
            $(".testimonial-logo-carousel").owlCarousel({
                items: 5,
                loop: true,
                navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
            });  
    // textimonial section owlcarousel end

    // choose section counterup start
        $('.choose-section .choose-section-text .count').counterUp({
            delay: 10,
            time: 1000
        });
    // choose section counterup end
    


});
