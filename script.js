
var buttonActive = document.querySelector('.button');
var buttonText = buttonActive.querySelector('span');
var listContainer = document.querySelector('.list-item-container');
var listItemHidden = listContainer.querySelectorAll('.hidden-tablet');
var listItemHiddenMonitor = listContainer.querySelectorAll('.hidden-monitor');

buttonActive.addEventListener('click', function(){
    buttonActive.classList.toggle('button-active'); 
        for (let i = 0; i<listItemHidden.length; i++) {
         listItemHidden[i].classList.toggle('hidden-tablet');    
}
        for (let i = 0; i<listItemHiddenMonitor.length; i++) {
             listItemHiddenMonitor[i].classList.toggle('hidden-monitor');
}
        if (buttonText.textContent === 'Скрыть') {
                 buttonText.textContent = 'Показать все';
        }   else {
            buttonText.textContent = 'Скрыть'; 
} });

if (window.innerWidth < 768) {
const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView:'auto',
   loop: true,
    });
}
