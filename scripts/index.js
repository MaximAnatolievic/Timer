window.addEventListener('DOMContentLoaded', () => {


    //Timer
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return { timeRemaining, hours, seconds, minutes };
        }

        function correctNum(num) {
            if (num < 10) {
                num = "0" + num;
            }
            return num;
        }

        const idInterval = setInterval(updateClock, 1000);

        function updateClock() {
            const timer = getTimeRemaining();
            //let count = 111;
            timerHours.textContent = correctNum(timer.hours);
            timerMinutes.textContent = correctNum(timer.minutes);
            timerSeconds.textContent = correctNum(timer.seconds);

            if (timer.timeRemaining <= 0) {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                clearInterval(idInterval);
            }
            //console.log(count)
        }

        updateClock();
    }
    countTimer('06 may 2021');

    //меню
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach(item => item.addEventListener('click', handlerMenu));

    };
    toggleMenu();

    //popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupCloseBtn = popup.querySelector('.popup-close');


        function Show(obj) {
            obj.style.opacity = +0;
            obj.style.display = 'block';
            let op = (obj.style.opacity) ? parseFloat(obj.style.opacity) : parseInt(obj.style.filter) / 100;
            function allShow() {
                showInterval = requestAnimationFrame(allShow);
                if (op < 1) {
                    op += 0.05;
                    obj.style.opacity = op;
                    obj.style.filter = `alpha(opacity='${op * 100}')`;
                    console.log(op);
                } else if (op >= 1) {
                    cancelAnimationFrame(showInterval);
                }
            }
            showInterval = requestAnimationFrame(allShow);
        }

        function Hide(obj) {
            obj.style.opacity = +1;
            let op = (obj.style.opacity) ? parseFloat(obj.style.opacity) : parseInt(obj.style.filter) / 100;
            function allHide() {
                hideInterval = requestAnimationFrame(allHide);
                if (op >= 0) {
                    op -= 0.05;
                    obj.style.opacity = op;
                    obj.style.filter = `alpha(opacity='${op * 100}')`;
                    console.log(op);
                    
                } else if (op < 0) {
                    cancelAnimationFrame(hideInterval);
                    obj.style.display = 'none';
                }
            }
            hideInterval = requestAnimationFrame(allHide);
        }

        popupBtn.forEach(elem => {
            elem.addEventListener('click',  () => {
                if (document.documentElement.clientWidth >= 768) {
                    Show(popup);
                } else {
                    popup.style.opacity = +1;
                    popup.style.display = 'block';
                }
            });
        });

        popupCloseBtn.addEventListener('click', () => {
            if (document.documentElement.clientWidth >= 768) {
                Hide(popup);
            } else {
                popup.style.display = 'none';
            }
        });
        console.log();
    };
    togglePopUp();
});

function Hide() {


}
