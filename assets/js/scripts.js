var jQuery;
(function($, window) {

    'use strict';


    //Homepage Rotator Rotate Function

    var windowWidth,
        interval,
        sliderPosition,
        width = $(window).width(),
        st,
        intervalPeriod = 7500,
        i = 1;

    //Initilise Slider

    function initSlider() {
        windowWidth = $(window).width();

        $(".homepage-hero .slide").width(windowWidth);
        $(".homepage-hero .slide-holder").width($(".controls li").length * windowWidth);
        if ($(window).width() <= 823) {
            var heroHeight = $(window).height() - $(".site-header").height();
            $(".homepage-hero").height(heroHeight);
            $(".homepage-hero .slide").height(heroHeight);
            $(".homepage-hero .img-mask").height(heroHeight);
        } else {
            $(".homepage-hero").css({
                'height': ''
            });
            $(".homepage-hero .slide").css({
                'height': ''
            });
            $(".homepage-hero .img-mask").css({
                'height': ''
            });
        }
    }


    // Slide Function

    function slide(slideID, posStart) {
        switch (slideID) {

            case "slide1":
                sliderPosition = "0";
                break;

            case "slide2":
                sliderPosition = windowWidth * -1;
                break;

            case "slide3":
                sliderPosition = windowWidth * -2;
                break;

            case "slide4":
                sliderPosition = windowWidth * -3;
                break;

            case "slide5":
                sliderPosition = windowWidth * -4;
                break;
        }

        if ($(window).width() >= 1024) {
            $(".homepage-hero .slide-holder").animate({
                left: sliderPosition
            }, 500);
            $(".homepage-hero .text").stop().animate({
                opacity: 0
            }, 200).animate({
                left: posStart
            }, 300).animate({
                left: "0",
                opacity: 1
            }, 400);
        } else {
            $(".homepage-hero .slide-holder").animate({
                left: sliderPosition
            }, 300);
            $(".homepage-hero .text").stop().animate({
                opacity: 0
            }, 100).animate({
                left: posStart
            }, 300).animate({
                left: "0",
                opacity: 1
            }, 300);
        }
    }


    // Auto rotate

    function autoRotate() {
        if ($(".homepage-hero .controls li.selected").next("li").length !== 0) {
            slide($(".homepage-hero .controls li.selected").removeClass("selected").next("li").addClass("selected").attr("id"));
        } else {
            slide($(".homepage-hero .controls li:first").attr("id"));
            $(".homepage-hero .controls li.selected").removeClass("selected");
            $(".homepage-hero .controls li:first").addClass("selected");
        }
    }

    function validDigits(n) {
        return n.replace(/[^0-9]+/g, '');
    }

    $(function() {

        // homepage-hero

        if ($(".slide-holder .slide").length > 1) {
            $(".slide-holder").after('<div class="controls"><div class="content-width"><ul></ul></div></div>');
            $(".slide-holder .slide").each(function() {
                $(".homepage-hero .controls ul").append('<li id="slide' + i + '"><a data-ajax="false" href="#">' + i + '</a></li>');
                if (i === 1) { $(".controls li").addClass("selected"); }
                i = i + 1;
            });

        }
        initSlider();

        interval = window.setInterval(function() {
            autoRotate();
        }, intervalPeriod);

        // Swipe gestures

        $(".homepage-hero").on("swipeleft", function() {
            if ($(".homepage-hero .controls li.selected").next("li").length !== 0) {
                $(".selected").removeClass("selected").next("li").addClass("selected");
                slide($(".selected").attr("id"), "120px");
            }
        });

        $(".homepage-hero").on("swiperight", function() {
            if ($(".homepage-hero .controls li.selected").prev("li").length !== 0) {
                $(".selected").removeClass("selected").prev("li").addClass("selected");
                slide($(".selected").attr("id"), "-120px");
            }
        });


        // Click gestures

        $(".homepage-hero .controls li").click(function() {
            if (!$(this).hasClass("selected")) {
                $(".selected").removeClass("selected");
                $(this).addClass("selected");
                slide($(this).attr("id"), "120px");
            }
            return false;
        });


        // Hover pause auto rotate

        $(".homepage-hero").hover(function() {
            interval = window.clearInterval(interval);
        }, function() {
            interval = window.setInterval(function() {
                autoRotate();
            }, intervalPeriod);
        });


        // Counters

        $('.counters .number span').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 5000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });


        // Modaal init
        $(".js-modaal").modaal();

        // Slick init
        $(".js-slick").slick();

        if (window.matchMedia('(max-width: 1200px)').matches) {
            var heroSliderHP = new Swiper('.hero-swiper-container', {
                slidesPerView: 2.5,
                freeModeMomentumRatio: 0.5,
                freeMode: true,
                slidesPerGroup: 2,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });

            if (window.matchMedia('(min-width: 768px)').matches) {
                var landingSliderHP = new Swiper('.landing-swiper-container', {
                    slidesPerView: 1.2,
                    freeModeMomentumRatio: 0.5,
                    freeMode: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                });
            }

            var thoughtLeadershipSliderHP = new Swiper('.thought-leadership-swiper-container', {
                slidesPerView: 1,
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 1.6,
                    }
                }
            });

            var caseStudiesSliderHP = new Swiper('.case-studies-swiper-container', {
                slidesPerView: 1.4,
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 1.6,
                    }
                }
            });

            var ourPartnerSliderHP = new Swiper('.our-partners-swiper-container', {
                slidesPerView: 1,
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 1.5,
                    }
                }
            });
        }

        if (window.matchMedia('(max-width: 1024px)').matches) {

            var dabusPartnerSlider = new Swiper('.dabus-partner-swiper-container', {
                freeModeMomentumRatio: 0.5,
                slidesPerView: 1,
                freeMode: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2.3,
                        slidesPerGroup: 3,
                    }
                }
            });

            var newsRelatedBlogSwiperContainer = new Swiper('.news-related-blog-swiper-container', {
                freeMode: true,
                freeModeMomentumRatio: 0.5,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 1.6,
                    }
                }
            });
        }

        // Off canvas mobile menu
        $('.main-nav .menu-item-has-children').each(function() {
            $(this).prepend('<span class="menu-item-toggle-in"/>');
            $(this).children('.sub-menu').prepend('<li><span class="menu-item-toggle-out">Back</span></li>')
        });

        $(document).on('click touchend', '.menu-item-toggle-in, .menu-item-toggle-in + a:not([href]), .menu-item-toggle-out', function(e) {
            e.preventDefault();
            $(this).closest('.menu-item-has-children').toggleClass('active')
        });

        // Mobile Hamburger

        $(document).on('click touchend', '.hamburger', function(e) {
            e.preventDefault();
            $(".main-nav").slideToggle();
            $(this).toggleClass('is-active');
        });

        $(document).on('click touchstart', 'a.button-scroll', function(e) {
            e.preventDefault();
            let scrollToSection = $(this).attr('href');
            if (scrollToSection != '' && $(scrollToSection).length) {
                $([document.documentElement, document.body]).animate({ scrollTop: $(scrollToSection).offset().top - 100 }, 500);
            }
        });

        $(document).on('click touchend', '.landing-dl-toggle', function(e) {
            e.preventDefault();
            $(this).closest('.landing-dl').toggleClass('active');
        });

        $(document).on('keyup', 'input[type="tel"]', function(e) {
            var field = this.value;
            this.value = validDigits(field);
        });

        // Mobile filter

        $(".page-menu .current-menu-item a").click(function() {
            $(".page-menu").toggleClass("page-menu-expanded");
            return false;
        });


        // Contact form switch

        $(".ddl-enquiry-type").change(function() {
            $(".enquiry-form").hide();
            var formSelected = $(".ddl-enquiry-type").val();

            switch (formSelected) {

                case "Business":
                    $(".enquiry-form-business").show();
                    break;

                case "General":
                    $(".enquiry-form-general").show();
                    break;

                case "Partnership":
                    $(".enquiry-form-partnership").show();
                    break;

                case "Career":
                    $(".enquiry-form-career").show();
                    break;

            }
        });


        //Show video function

        $(".button-showreel").click(function() {
            $(".showreel").fadeIn();
            interval = window.clearInterval(interval);
            return false;
        });
        $(".showreel .button-hide").click(function() {
            $(".showreel").fadeOut();
            $('.showreel iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        });


        //SEO text reveal

        $(".button-seo").click(function() {
            $(".seo-text").slideDown();
            $(".button-seo").fadeOut();
            return false;
        });

        // Scroll to top button

        $(".button-scroll-to-top").click(function() {
            $('html,body').animate({
                scrollTop: 0
            }, 'slow');
            st = 0;
            return false;
        });

        $(window).scroll(function() {
            st = $(this).scrollTop();
            if (st > 500) {
                $(".button-scroll-to-top").fadeIn();
            } else {
                $(".button-scroll-to-top").fadeOut();
            }
        });
        $(".row-expression-of-interest").hide();
        var role = $(".role-selection option:selected").text();
        $("#Field21").val(role);
        //Show row-expression-of-interest
        $(".role-selection").change(function() {
            role = $(".role-selection option:selected").text();
            $("#Field21").val(role);
            if (role === "Expression of Interest") {
                $(".row-expression-of-interest").show();
            } else {
                $(".row-expression-of-interest").hide();
            }
        });

        if ($('.footer').hasClass('blue-bg')) {
            $('.newsletter').addClass('blue-bg');
        } else {
            $('.newsletter').removeClass('blue-bg');
        }

    });

    $(window).resize(function() {

        // If resized horizontally
        if ($(window).width() === width) {
            return;
        } else {

            width = $(window).width();

            //Reset Hamburger

            $(".main-nav").attr("style", "");


            //Reset rotator

            initSlider();
            $(".homepage-hero .slide-holder").css("left", 0);
            $(".homepage-hero .controls li.selected").removeClass("selected");
            $(".homepage-hero .controls li:first").addClass("selected");

        }

    });

    // Scroll to download form
    $(document).on('click', 'a.button-download', function(e) {
        e.preventDefault();

        let downloadForm = $(".section-download-b2b .b2b-landing-form");

        if (downloadForm.length) {
            $([document.documentElement, document.body]).animate({
                scrollTop: downloadForm.offset().top - 300
            }, 1000);
        }
    });


    $(document).on('click', '.b2b-landing-form_wrapper .gform_button[type="submit"]', function(e) {
        // e.preventDefault();

        let downloadForm = $(this).closest(".b2b-landing-form_wrapper");

        if (downloadForm.closest('.section-download-b2b').length > 0) {
            downloadForm = $(this).closest(".section-download-b2b");
        }

        if (downloadForm.length) {
            $([document.documentElement, document.body]).animate({
                scrollTop: downloadForm.offset().top - 100
            }, 1000)
        }
    });

    $(document).on('click', '.bi-scroll-top-after-submit .gform_button[type="submit"]', function(e) {
        let downloadForm = $(this).closest(".gform_wrapper");
        if (downloadForm.length) {
            $([document.documentElement, document.body]).animate({
                scrollTop: downloadForm.offset().top - 150
            }, 1000);
        }
    });

}(jQuery, this));
