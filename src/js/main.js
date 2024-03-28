$(document).ready(function () {
  // scroll menu navbar
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.nav-bar').addClass('sticky');
    } else {
      $('.nav-bar').removeClass('sticky');
    }
  });

  // toggle menu/nav-bar
  $('.menu-btn').click(function () {
    $('.nav-bar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  // typing animation
  var typed = new Typed('.typing', {
    strings: [
      'Desenvolvedor Web',
      'Analista de Sistemas',
      'Em Busca de oportunidade',
      '',
    ],
    typeSpeed: 20,
    backSpeed: 20,
    loop: true,
  });

  var typed2 = new Typed('.typing-2', {
    strings: [
      'Sobre Mim!',
    ],
    typeSpeed: 50,
    backSpeed: 60,
    loop: false,
  });

  var typed3 = new Typed('.typing-3', {
    strings: [
      'Um pouco sobre minha historia',
    ],
    typeSpeed: 40,
    backSpeed: 100,
    loop: true,
  });
  // owl carousel
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 2,
        nav: false,
      },
    },
  });
});
