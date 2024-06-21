  // @ts-nocheck
  // core version + navigation, pagination modules:
  import Swiper from "swiper";
  import { Autoplay, Navigation, Controller, EffectFade} from "swiper/modules";
  
  // import Swiper and modules styles
  import "swiper/css";
  import "swiper/css/effect-fade";

  import {numberWithZero, getCount} from "../lib/utils";
  

  document.addEventListener( 'astro:page-load', function() {

    const carousels = document.querySelectorAll(".carousel-gallery");

    carousels.forEach(function (comp, index){ 
      
      

      const elBackgroundCarousel = comp.querySelector(".carousel-background");
      const elForegroundCarousel = comp.querySelector(".carousel-foreground");
      const elNextButton = comp.querySelector(".swiper-button-next");
      const elPrevButton = comp.querySelector(".swiper-button-prev");
      const elCurrentIndicator = comp.querySelector(".swiper-number-current");
      const elTotalIndicator = comp.querySelector(".swiper-number-total");

      if (elBackgroundCarousel && elForegroundCarousel && elNextButton && elPrevButton){ //if all elements are loaded

        const backgroundSwiper = new Swiper( elBackgroundCarousel, {
          autoplay: {
            delay: 5000,
          },
          slidesPerView: 1,
          slidesPerGroup:1,
          loop: true,
          speed: 400,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          allowTouchMove: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          modules: [EffectFade, Navigation, Autoplay, Controller],
        });

        const foregroundSwiper = new Swiper(elForegroundCarousel, {
          autoplay: {
            delay: 5000,
          },
          navigation: false,
          slidesPerView: 1,
          slidesPerGroup:1,
          speed: 600,
          loop: true,
          slideToClickedSlide: true,
          modules: [ Navigation, Autoplay, Controller],
        });
        
        //Set initial indicator
        let numCurrentSlide = backgroundSwiper.activeIndex +1;
        let currentSlide = numberWithZero(numCurrentSlide);

        let numTotalSlides = backgroundSwiper.slides.length;       
        let totalSlides = numberWithZero(numTotalSlides);

        // Update values
        elCurrentIndicator.textContent = currentSlide;
        elTotalIndicator.textContent = totalSlides;

        backgroundSwiper.on("slideChange", function (e) {
          currentSlide = numberWithZero(e.realIndex + 1);
          elCurrentIndicator.textContent = currentSlide;
        });

        // Assign each other controls
        backgroundSwiper.controller.control = foregroundSwiper;
        foregroundSwiper.controller.control = backgroundSwiper;
        
    }

    });
},{ once: false });


