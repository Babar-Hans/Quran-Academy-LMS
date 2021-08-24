

// _________FOR SIDEBAR______
// <!-- scripting for jquery -->

    $(document).ready(function () {
        // jQuery for expand and collapse the sidebar
        $('.open-btn').click(function () {
            $('.main-sidebar').addClass('active');
        });

        $('.close-btn').click(function () {
            $('.main-sidebar').removeClass('active');
        });

        $('.main-article').click(function () {
            $('.main-sidebar').removeClass('active');
        });
        $('.navbar').click(function () {
            $('.main-sidebar').removeClass('active');
        });
        $('.jquery-remove').click(function () {
            $('.main-sidebar').removeClass('active');
        });
    });


/* <!-- scripting jquery end --> */ 


    // <!-- carousel plugin scripting start -->
        //  FOR SLIDES OF COURSES HOME/HOME GUEST
        $(document).ready(function () {
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 20,
                nav: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 2
                    }
                }
            })
        })


 