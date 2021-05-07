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
    toggleTabContent(0);
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

export default tabs;