const advantagesItems = document.querySelectorAll('.advantages-item');
const detailsTexts = document.querySelectorAll('.details-text');

advantagesItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    detailsTexts.forEach(text => text.classList.remove('active'));
    
    detailsTexts[index].classList.add('active');
  });
});
