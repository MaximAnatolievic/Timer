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

        let animate;

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

export default calc;