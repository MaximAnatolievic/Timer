const togglePopUp = () => {
    const popup = document.querySelector('.popup');
    const form3 = document.getElementById('form3');
    form3.style.color = 'white';
    let hideInterval;
    let showInterval;

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

export default togglePopUp;