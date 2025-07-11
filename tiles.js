// tiles.js

gsap.registerPlugin(Flip);

const cards = document.querySelectorAll('.project-card');
const detail = document.querySelector('.detail');
const modalCard = document.querySelector('.modal-card');

let activeCard = null;

function showDetails(card) {
  if (activeCard) return;

  const state = Flip.getState(detail);

  // Clone the card content into modal
  modalCard.innerHTML = card.innerHTML;

  Flip.fit(detail, card, {
    scale: true,
    fitChild: modalCard
  });

  gsap.set(detail, {
    clearProps: 'all',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    visibility: 'visible',
    overflow: 'auto'
  });

  Flip.from(state, {
    duration: 0.6,
    ease: 'power2.inOut',
    scale: true
  });

  activeCard = card;
  document.addEventListener('click', closeOnOutside);
}

function hideDetails() {
  if (!activeCard) return;

  document.removeEventListener('click', closeOnOutside);

  const state = Flip.getState(detail);

  Flip.fit(detail, activeCard, {
    scale: true,
    fitChild: modalCard
  });

  Flip.from(state, {
    duration: 0.6,
    ease: 'power2.inOut',
    scale: true
  }).then(() => {
    gsap.set(detail, { visibility: 'hidden' });
    modalCard.innerHTML = '';
  });

  activeCard = null;
}

function closeOnOutside(e) {
  if (!modalCard.contains(e.target) && !activeCard.contains(e.target)) {
    hideDetails();
  }
}

// Only bind clicks to the “Learn More” buttons
cards.forEach(card => {
  const learnMoreBtn = card.querySelector('.learn-more');
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      showDetails(card);
    });
  }
});
