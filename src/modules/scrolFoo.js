const scrolFoo = () => {
    const imgLink = document.querySelector('[src="images/scroll.svg"]'),
    serviceLink = document.querySelectorAll('[href="#service-block"]')[1],
    portfLink = document.querySelector('[href="#portfolio"]'),
    calcLink = document.querySelector('[href="#calc"]'),
    commandLink = document.querySelector('[href="#command"]'),
    connectLink = document.querySelector('[href="#connect"]'),
    serviceLink2 = document.querySelectorAll('[href="#service-block"]')[0];

    imgLink.addEventListener('click', (event)=>{
        event.preventDefault();
        let target = event.target;
        funkScroll(target);
    });
    serviceLink.addEventListener('click', (event)=>{
        event.preventDefault();
        let target = event.target;
        funkScroll(target);
    });
    connectLink.addEventListener('click', (event)=>{
        event.preventDefault();
        let target = event.target;
        funkScroll(target);
    });
    portfLink.addEventListener('click', (event)=>{
        event.preventDefault();
        let target = event.target;
        funkScroll(target);
    });
    calcLink.addEventListener('click', (event)=>{
        event.preventDefault();
        let target = event.target;
        funkScroll(target);
    });
    commandLink.addEventListener('click', (event)=>{
        event.preventDefault();
        let target = event.target;
        funkScroll(target);
    });

    function funkScroll(target){
        let scrollInterval; 

        const scrolling = () => {

            scrollInterval = requestAnimationFrame(scrolling);
            let top;
            if(target ===imgLink||target ===serviceLink){            

                top = Math.ceil(document.getElementById('service-block').getBoundingClientRect().top);
            }else if(target === portfLink) {

                top = Math.ceil(document.getElementById('portfolio').getBoundingClientRect().top);
            }else if(target === calcLink){

                top = Math.ceil(document.getElementById('calc').getBoundingClientRect().top);
            } else if (target === commandLink){

                top = Math.ceil(document.getElementById('command').getBoundingClientRect().top);
            } else if (target === connectLink){

                top = Math.ceil(document.getElementById('connect').getBoundingClientRect().top);
            }else {
                cancelAnimationFrame(scrollInterval);
            }
            let step = Math.ceil(top*0.1);
            if(top<=10){
                step = 2;
            } 
            scrollBy(0, step);
            if(step >= top){
                    cancelAnimationFrame(scrollInterval);
            } else if (document.documentElement.clientHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight){
                cancelAnimationFrame(scrollInterval);
            }
        }
        scrollInterval = requestAnimationFrame(scrolling);
    }
}

export default  scrolFoo;
