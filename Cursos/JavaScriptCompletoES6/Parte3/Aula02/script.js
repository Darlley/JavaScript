const classAtivo = "ativo";

// AULA 9
function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add(classAtivo);

    if(tabMenu.length && tabContent.length){
        function activetab(index){
            tabContent.forEach(section => {
                section.classList.remove(classAtivo);
            });
            tabContent[index].classList.add(classAtivo);
        }

        tabMenu.forEach((item, index) => {
            item.addEventListener('click', function(){
                activetab(index);
            });
        });
    }
}
initTabNav();

// AULA 10
function initAccordion(){
    const listaAccordion = document.querySelectorAll('.js-accordion dt');

    if(listaAccordion.length){
        
        listaAccordion[0].classList.add(classAtivo);
        listaAccordion[0].nextElementSibling.classList.toggle(classAtivo)

        function addClass(){
            this.classList.toggle(classAtivo);
            this.nextElementSibling.classList.toggle(classAtivo)
        }
        listaAccordion.forEach(item => {
            item.addEventListener('click', addClass);
        });
    }
}
initAccordion();

// AULA 11

// AULA 12
function initAnimaScroll(){
    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length){
        const wd_metade = window.innerHeight*0.6;
        function animarScroll(){
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - wd_metade) < 0;
                if(isSectionVisible){
                    section.classList.add('ativo');
                }
            });
        }
        animarScroll();
        window.addEventListener('scroll', animarScroll);
    }
}
initAnimaScroll();
