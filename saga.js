'use strict';
{

  window.addEventListener('resize', () => {
    closeOverlay();
  });

  // overlay

  const open = document.querySelector('#open');
  const close = document.querySelector('#close');
  const overlay = document.querySelector('.overlay');
  const imari = document.querySelector('#imari');
  const imariOverlay = document.querySelector('.slides-overlay');
  const imariClose = document.querySelector('#imari-close');

  
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

  // overlay
  
  imari.addEventListener('click', () => {
    imariOverlay.classList.add('show-overlay');
  });

  imariClose.addEventListener('click', () => {
    imariOverlay.classList.remove('show-overlay');
  });

  
}