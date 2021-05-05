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
    countTimer('07 may 2021');

    //меню
    const toggleMenu = () => {
        const menu = document.querySelector('menu');

        document.addEventListener('click', event => {
            const target = event.target;
            console.log(target);
            const target1 = target.closest('.menu');
            const target2 = target.closest('.close-btn');
            const target3 = target.closest('.active-menu');
            if (target1) {
                menu.classList.add('active-menu');
            } else if (!target3 || target2 || target.tagName === 'A') {
                menu.classList.remove('active-menu');
            }

        });

    };
    toggleMenu();

    //popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup');

        function Show(obj) {
            obj.style.opacity = +0;
            obj.style.display = 'block';
            let op = (obj.style.opacity) ? parseFloat(obj.style.opacity) : parseInt(obj.style.filter) / 100;
            function allShow() {
                showInterval = requestAnimationFrame(allShow);
                if (op < 1) {
                    op += 0.03;
                    obj.style.opacity = op;
                    obj.style.filter = `alpha(opacity='${op * 100}')`;

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
                    op -= 0.03;
                    obj.style.opacity = op;
                    obj.style.filter = `alpha(opacity='${op * 100}')`;

                } else if (op < 0) {
                    cancelAnimationFrame(hideInterval);
                    obj.style.display = 'none';
                }
            }
            hideInterval = requestAnimationFrame(allHide);
        }

        document.addEventListener('click', event => {
            let target = event.target;


            if (target.matches('.popup-btn')) {
                if (document.documentElement.clientWidth >= 768) {
                    Show(popup);
                } else {
                    popup.style.opacity = +1;
                    popup.style.display = 'block';
                }
            } else if (target.matches('.popup-close')) {
                if (document.documentElement.clientWidth >= 768) {
                    Hide(popup);
                } else {
                    popup.style.display = 'none';
                }
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    if (document.documentElement.clientWidth >= 768) {
                        Hide(popup);
                    } else {
                        popup.style.display = 'none';
                    }
                }
            }


        });
    };
    togglePopUp();

    //Табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');
        const toggleTabContent = index => {
            tabContent.forEach((item, i) => {
                if (index === i) {
                    tab[i].classList.add('active');
                    item.classList.remove('d-none');
                } else {
                    item.classList.add('d-none');
                    tab[i].classList.remove('active');
                }
            });
        };
        tabHeader.addEventListener('click', event => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();

    //Слайдер
    const slider = () => {
        const sliders = document.querySelector('#all-progects'),
            slide = sliders.querySelectorAll('.portfolio-item'),
            dot = [];

        slide.forEach((el, i) => {
            const dotty = document.createElement('li');
            if (i === 0) {
                dotty.classList = 'dot-active dot';
            } else {
                dotty.classList = 'dot';
            }
            dot.push(dotty);
            document.querySelector('.portfolio-dots').append(dotty);
        });


        let currentSlide = 0;
        let interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length)currentSlide = 0;
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 2000) => {
            interval = setInterval(autoPlaySlide, time);
        };


        const stopSlide = () => {
            clearInterval(interval);
        };

        sliders.addEventListener('click', event => {
            event.preventDefault();
            const target = event.target;
            if (!target.matches('.portfolio-btn, .dot')) return;
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            if (target.matches('#arrow-right')) {
                currentSlide++;
                if (currentSlide >= slide.length)currentSlide = 0;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
                if (currentSlide < 0)currentSlide = slide.length - 1;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target)currentSlide = index;
                });

            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        sliders.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });

        sliders.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide();
    };
    slider();
});
