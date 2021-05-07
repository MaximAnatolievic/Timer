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
};

export default countTimer;