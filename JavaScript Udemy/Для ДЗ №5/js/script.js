let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    liLast = document.createElement('li');

liLast.innerHTML = 'Пятый пункт';
liLast.classList.add('menu-item');
menu.append(liLast);


menu.insertBefore(menuItem[2], menuItem[1]);






