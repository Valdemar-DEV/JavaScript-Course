window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),                      //Назначаємо змінні
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent (a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');             //Функція яка ховає контент, видаляє з нього клас show і добавляє клас hide
            tabContent[i].classList.add('hide');
            
        }
       
    }

        hideTabContent(1);

    function showTabContent (b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');                 //Функція яка показує контент, перевіряє на наявність класу hide, якщо клас є тоді заберає hide і 
            tabContent[b].classList.add('show');                                            // добавляє show                                                              
        }
        
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {                         // Функція шукає ціль на що ми нажали
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});