document.addEventListener('DOMContentLoaded', function() {
    var slides = document.getElementsByClassName('slide');
    var prevButton = document.querySelector('#meuBanner .prev');
    var nextButton = document.querySelector('#meuBanner .next');
    var currentSlide = 0;
  
    function showSlide(n) {
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
      }
      slides[n].classList.add('active');
      currentSlide = n;
    }
  
    function nextSlide() {
      if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
      } else {
        showSlide(0);
      }
    }
  
    function prevSlide() {
      if (currentSlide > 0) {
        showSlide(currentSlide - 1);
      } else {
        showSlide(slides.length - 1);
      }
    }
  
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
  
    showSlide(currentSlide);
    setInterval(nextSlide, 3500); // Altera a cada 3,5 segundos (3500 milissegundos)
  });
  