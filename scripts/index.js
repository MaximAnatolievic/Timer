window.addEventListener('DOMContentLoaded', () => {
    //скрытие объекта
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

    //Timer
    function countTimer(deadline) {
        const timerHours = document.getElementById('timer-hours'),
            timerMinutes = document.getElementById('timer-minutes'),
            timerSeconds = document.getElementById('timer-seconds');

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
    countTimer('10 may 2021');

    //меню
    const toggleMenu = () => {
        const menu = document.querySelector('menu');

        document.addEventListener('click', event => {
            const target = event.target;
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
        const form3 = document.getElementById('form3');
        form3.style.color = 'white';


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
        const sliders = document.getElementById('all-progects'),
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

    //меняем фото команды
    const picChange = () => {

        document.addEventListener('mouseover', event => {
            const target = event.target;
            if (target.matches('.command__photo')) {
                target.src = target.dataset.img;
            }
        });

        document.addEventListener('mouseout', event => {
            const target = event.target;
            if (target.matches('.command__photo')) {
                let str = target.src;
                str = str.substring(0, str.indexOf('a.jpg')) + '.jpg';
                target.src = str;
            }
        });

    };
    picChange();

    //Валидаторы
    const validation = () => {


        document.addEventListener('input', event => {
            const target = event.target;
            if (target.matches('.calc-block>input')) {
                target.value = target.value.replace(/\D/, '');
            } else if (target.matches(`.form-name, #form2-name`)) {
                target.value = target.value.replace(/[^ А-яа-я]/, '');
            } else if (target.matches(`#form2-message`)) {
                target.value = target.value.replace(/[^ А-яа-я\.\,\!\:\;\-\)\(]/, '');
            } else if (target.matches('.form-email')) {
                target.value = target.value.replace(/[^\w\-@\.\!~\*']/g, '');
            } else if (target.matches('.form-phone')) {
                target.value = target.value.replace(/[^\d\+]/g, '');
            }
        });

        document.addEventListener('blur', event => {
            const target = event.target;
            if (target.matches('.calc-block>input')) {
                const isCorrect = target.value.match(/\d/g);
                if (isCorrect !== null)target.value = isCorrect.join('');
            } else if (target.matches(`.form-name, #form2-name`)) {
                target.value = target.value.replace(/\s+/g, ' ');
                target.value = target.value.replace(/(\s\-)+/g, '');
                target.value = target.value.replace(/\-+/g, '-');
                target.value = target.value.replace(/^[\s\-]+/gi, '');
                target.value = target.value.replace(/\w+/gi, '');
                target.value = target.value.replace(/\-$/gi, '');
                if (target.value)target.value = target.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' ');


            } else if (target.matches('.form-email')) {
                let isCorrect = target.value.match(/@/);
                if (!isCorrect && target.value !== '') {
                    alert('E-mail должен содержать символ @');
                    target.value = '';
                } else {
                    isCorrect = target.value.match(/[\w\.]{1,10}@[a-z1-9]{2,10}\.[a-z]{2,3}/gi);
                    if (!isCorrect && target.value !== '') {
                        alert('Неверно указан домен');
                        target.value = '';
                    }
                }

            } else if (target.matches('.form-phone')) {
                target.value = target.value.replace(/^8{1}|^7|\+7/gi, '+7 ');
                target.value = target.value.replace(/^...([0-9]{3})/g, (match, val1) => (val1 = `+7 ${val1} `));
                if (target.value.length !== 14 && target.value !== '') {
                    target.value = '';
                    alert('Проверьте номер');
                }

            } else if (target.matches('#form2-message')) {
                target.value = target.value.replace(/\s+/g, ' ');
                target.value = target.value.replace(/\-+/g, '-');
                target.value = target.value.replace(/^[\s\-]+/gi, '');
                target.value = target.value.replace(/\w+/gi, '');
                target.value = target.value.replace(/([а-я]{1})/i, (math, val1) => (val1.toUpperCase()));
            }
        }, true);
    };
    validation();

    //Калькулятор
    const calc = (price = 100) => {
        const type = document.querySelector('.calc-type'),
            square = document.querySelector('.calc-square'),
            count = document.querySelector('.calc-count'),
            day = document.querySelector('.calc-day'),
            totalValue = document.getElementById('total'),
            calcBlock = document.querySelector('.calc-block');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = type.options[type.selectedIndex].value,
                squareValue = +square.value;
            if (count.value > 1 && count.value) {
                countValue += (count.value - 1) / 10;
            }
            if (day.value < 5 && day.value) {
                dayValue = 2;
            } else if (day.value < 10 && day.value) {
                dayValue = 1.5;
            } else {
                dayValue = 1;
            }
            if (typeValue && squareValue) {
                total = Math.ceil(price * typeValue * squareValue * countValue * dayValue);
            }


            function showIt() {
                let currValue = parseInt(totalValue.textContent);
                animate = requestAnimationFrame(showIt);
                if (currValue < total) {
                    const dif = Math.ceil((total - currValue) * 0.05);
                    currValue += dif;
                    totalValue.textContent = currValue;
                } else if (currValue > total) {
                    const dif = Math.ceil((currValue - total) * 0.05);
                    currValue -= dif;
                    totalValue.textContent = currValue;
                } else if (currValue === total) {
                    totalValue.textContent = total;
                    cancelAnimationFrame(animate);
                } else {
                    totalValue.textContent = total;
                    cancelAnimationFrame(animate);
                }

            }

            animate = requestAnimationFrame(showIt);

        };


        calcBlock.addEventListener('change', event => {
            const target = event.target;

            if (target.matches('select') || target.matches('input')) {
                countSum();
            }
        });

    };
    calc(100);

    //send-ajax-form
    const sendForm = () => {
        const errorMessage = 'Что-то пошло не так',
            successMessage = 'Спасибо, мы скоро с Вами свяжемся';

        const forms = document.querySelectorAll('[name="user_form"]');
        const statusMessage = document.createElement('div');
        const animateDiv = document.createElement('div');
        statusMessage.appendChild(animateDiv);
        statusMessage.style.cssText = 'font-size: 2rem';



        forms.forEach(item => {
            item.addEventListener('submit', event => {
                event.preventDefault();
                item.appendChild(statusMessage);
                statusMessage.classList = 'lds-circle';
                const formData = new FormData(item);
                const body = {};
                formData.forEach((val, key) => {
                    body[key] = val;
                });
                if(!body.user_email){
                    document.querySelectorAll('input').forEach(item => {
                        item.value = '';
                    });
                    statusMessage.textContent = 'Не заполнено обязательное поле E-Mail';
                    throw new Error('email is empty');
                }

                const applySend = resp => {
                    if (resp.status !== 200) {
                        throw new Error('Network status is not 200');
                    }
                    statusMessage.textContent = successMessage;
                    statusMessage.classList.remove('lds-circle');
                    document.querySelectorAll('input').forEach(item => {
                        item.value = '';
                    });
                    if (item.matches('#form3')) {
                        setTimeout(()=>{
                        if (document.documentElement.clientWidth >= 768) {
                            Hide(document.querySelector('.popup'));
                        } else {
                            document.querySelector('.popup').style.display = 'none';
                        }
                    }, 2000);
                    }
                    
                };

                const postData = body => fetch('./server.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                });

                postData(body)
                    .then(applySend)
                    .catch(error => console.error(error));

            });
        });




    };
    sendForm();
});
/*
const postData = body => {
    const promise = new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(body));
        request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                document.querySelectorAll('input').forEach(item => {
                    item.value = '';
                });
                resolve(request.response);
            } else {
                statusMessage.textContent = errorMessage;
                reject(request.status);
            }
        });

    });
    return promise;
};
*/
