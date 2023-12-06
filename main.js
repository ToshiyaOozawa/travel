'use strict';

{
  // carousel

  const next = document.querySelector('#next');
  const prev = document.querySelector('#prev');
  const carouselUl = document.querySelector('#carousel-ul');
  const dots = [];
  const slides = carouselUl.children;

  let currentIndex = 0;

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
    
    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    carouselUl.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupButton() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('#carousel-buttons').appendChild(button);
    }
    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  updateButtons();
  setupButton();

  next.addEventListener('click', () => {
    currentIndex++;
    updateDots();
    updateButtons();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateDots();
    updateButtons();
    moveSlides();
  });

  window.addEventListener('resize', () => {
    moveSlides();
    closeOverlay();
  });
  
  // overlay

  const open = document.querySelector('#open');
  const close = document.querySelector('#close');
  const overlay =document.querySelector('.overlay');

  function closeOverlay() {
    overlay.classList.remove('move-overlay');
    open.classList.remove('hidden');
  }

  open.addEventListener('click', () => {
    overlay.classList.add('move-overlay');
    open.classList.add('hidden');
  });

  close.addEventListener('click', () => {
    closeOverlay();
  });

  // IntersectionObserver

  function callback(entries, obs) {
    entries.forEach(entry => {
      console.log(entries);
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const option = {
    thershold: .4,
  };

  const observer = new IntersectionObserver(callback, option);

  const stringTarget = document.querySelectorAll('.content-title');

  const imgTarget = document.querySelectorAll('.content-img');

  stringTarget.forEach(string => {
    observer.observe(string);
  });

  imgTarget.forEach(img => {
    observer.observe(img);
  });
}