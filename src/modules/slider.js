const slider = () => {
    const sliders = document.getElementById('all-progects'),
        slide = sliders.querySelectorAll('.portfolio-item'),
        dot = [];
        document.querySelectorAll('.dot').forEach((item)=>{
                item.remove();
        });

        

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

export default slider;