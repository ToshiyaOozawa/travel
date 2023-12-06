'use strict';

{
  const mainImg = document.querySelector('#main-img');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const next = document.querySelector('#next');
  const prev = document.querySelector('#prev');
  const imgTexts = document.querySelectorAll('.img-text');

  let activeIndex = 0;

  function chageActiveText() {
    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove('active');
    });
    imgTexts.forEach((text) => {
      text.classList.remove('show');
    });
    thumbnails[activeIndex].classList.add('active');
    imgTexts[activeIndex].classList.add('show');
  }


  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', () => {
      thumbnails.forEach((thumbnail) => {
        thumbnail.classList.remove('active');
      });
      imgTexts.forEach((text) => {
        text.classList.remove('show');
      });
      mainImg.src = thumbnails[i].src;
      thumbnails[i].classList.add('active');
      imgTexts[i].classList.add('show');
    });
  }


  next.addEventListener('click', () => {
    activeIndex++;
    if (activeIndex >= thumbnails.length) {
      activeIndex = 0;
    }
    chageActiveText();
    mainImg.src = thumbnails[activeIndex].src;
  });

  prev.addEventListener('click', () => {
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = thumbnails.length - 1;
    }
    chageActiveText();
    mainImg.src = thumbnails[activeIndex].src;
  });

  // setInterval(() => {
  //   next.click();
  // }, 5000);


}