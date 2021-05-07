const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
        successMessage = 'Спасибо, мы скоро с Вами свяжемся';

    const forms = document.querySelectorAll('[name="user_form"]');
    const statusMessage = document.createElement('div');
    const animateDiv = document.createElement('div');
    statusMessage.appendChild(animateDiv);
    statusMessage.style.cssText = 'font-size: 2rem';
    let hideInterval;
    
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

    forms.forEach(item => {
        item.addEventListener('submit', event => {
            event.preventDefault();
            item.appendChild(statusMessage);
            animateDiv.textContent ='';
            statusMessage.classList.add('lds-circle');
            const formData = new FormData(item);
            const body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            if(!body.user_email){
                document.querySelectorAll('input').forEach(item => {
                    item.value = '';
                });
                statusMessage.classList.remove('lds-circle');
                animateDiv.textContent = 'Не заполнено обязательное поле E-Mail';
                throw new Error('email is empty');
            }

            const applySend = resp => {
                if (resp.status !== 200) {
                    throw new Error('Network status is not 200');
                }
                animateDiv.textContent = successMessage;
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
                .catch((error) => {
                    statusMessage.classList.remove('lds-circle');
                    animateDiv.textContent = errorMessage;
                    console.error(error)});

        });
    });

};

export default sendForm;