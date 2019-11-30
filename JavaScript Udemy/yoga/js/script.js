window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    //Tabs
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

    //timer

    let deadline = '2019-12-01';

    function getTimeRemaining (endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/ 1000) % 60),   // отримуєм секунди
            minutes = Math.floor((t / 1000 / 60) % 60), // отримуєм хвилини
            hours = Math.floor((t / (1000 * 60 * 60)));   // отримуєм години
            // days1 = Math.floor((t / 1000 / 60 /60) % 24),           Спосіб отримати дні
            // days2 = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock (id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updadeClock, 1000);


        function updadeClock () {
            let t = getTimeRemaining (endtime);

            function addZero (num) {
                if(num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);


            if (t.total <= 0) {
                clearInterval (timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    };

    setClock('timer', deadline);
});