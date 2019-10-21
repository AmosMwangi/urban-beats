// navbar
jQuery(function($) {
    $(window).on('scroll', function() {
    if ($(this).scrollTop() >= 200) {
      $('.navbar').addClass('fixed-top');
    } else if ($(this).scrollTop() == 0) {
      $('.navbar').removeClass('fixed-top');
    }
  });

  function adjustNav() {
    var winWidth = $(window).width(),
      dropdown = $('.dropdown'),
      dropdownMenu = $('.dropdown-menu');
    
    if (winWidth >= 768) {
      dropdown.on('mouseenter', function() {
        $(this).addClass('show')
          .children(dropdownMenu).addClass('show');
      });
      
      dropdown.on('mouseleave', function() {
        $(this).removeClass('show')
          .children(dropdownMenu).removeClass('show');
      });
    } else {
      dropdown.off('mouseenter mouseleave');
    }
  }

  $(window).on('resize', adjustNav);

  adjustNav();
  });
  
  var slideIndex = 1;
    showDivs(slideIndex);
    
    function plusDivs(n) {
      showDivs(slideIndex += n);
    }
    
    function currentDiv(n) {
      showDivs(slideIndex = n);
    }
    // studio rooms
    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("demo");
      if (n > x.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-light-blue", "");
      }
      x[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " w3-light-blue";
    }

    function toggle_visibility(id) {
     var e = document.getElementById(id);
     if(e.style.display == 'block')
        e.style.display = 'none';
     else
        e.style.display = 'block';
  }

  // video background
  function deferVideo() {
    $("video source").each(function() {
    var sourceFile = $(this).attr("data-src");
    $(this).attr("src", sourceFile);
    var video = this.parentElement;
    video.load();
    });

    }
    window.onload = deferVideo;

    // studio equipments
    var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 6990,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
