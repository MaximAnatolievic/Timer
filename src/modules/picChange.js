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

export default picChange;