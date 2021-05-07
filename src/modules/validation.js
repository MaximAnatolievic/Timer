const validation = () => {

    document.querySelectorAll('.form-email').forEach((item)=>{
        item.required = true;
    })
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

export default validation;