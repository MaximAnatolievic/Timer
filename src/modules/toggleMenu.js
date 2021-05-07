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

export default toggleMenu;