'use strict';

{
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

  // cardOverlay

  const pItems = document.querySelectorAll('.card-pic>p');
  const closeCardOverlay = document.querySelectorAll('#cardOverlay-close')

  pItems.forEach(p => {
    p.addEventListener('click', () => {
      document.getElementById(p.dataset.id).classList.add('active');
    });
  });

  closeCardOverlay.forEach(closeCard => {
    closeCard.addEventListener('click', () => {
      document.getElementById(closeCard.dataset.id).classList.remove('active');
    });
  });

  // card dd

  const cardDts = document.querySelectorAll('.desc-card dl>dt');

  cardDts.forEach((dt) => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('card-change');

      cardDts.forEach(el => {
        if (dt !== el) {
          el.parentNode.classList.remove('card-change');
        }
      });
    });
  });

  // card intersection observer

  const cardCallback = (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  };
  
  const cardOptions = {
    threshold: .4,
  }

  const cardObserver = new IntersectionObserver(cardCallback, cardOptions);

  const cardTargets = document.querySelectorAll('.animate');

  cardTargets.forEach((target) => {
    cardObserver.observe(target);
    // target.addEventListener('transitionend', () => {
    //   target.classList.add('bg-color');
    // });
  });

  // curtain intersection observer

  const curtainTarget = document.querySelector('.kamakura-title');

  const curtainCallback = (entry, obs) => {
    console.log(entry[0]);
    if (entry[0].isIntersecting) {
      entry[0].target.classList.add('appear');
      obs.unobserve(entry[0].target);
    }
  };

  const curtainOption = {
    threshold: .2,
    rootMargin: '0px 0px -50px',
  };

  const curtainObserver = new IntersectionObserver(curtainCallback, curtainOption);

  curtainObserver.observe(curtainTarget);

  
}