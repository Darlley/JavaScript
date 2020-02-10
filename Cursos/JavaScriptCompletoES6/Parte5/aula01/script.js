//  EXERCÍCIOS

// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)
// 

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.

const classAtivo = "ativo";

// AULA 9
function initTabNav(){
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');

    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add(classAtivo);

        function activetab(index){
            tabContent.forEach(section => {
                section.classList.remove(classAtivo);
            });
            const direcao = tabContent[index].dataset.anime;
            tabContent[index].classList.add(classAtivo, direcao);
        }

        tabMenu.forEach((item, index) => {
            item.addEventListener('click', () => {
                activetab(index);
            });
        });
    }
}
initTabNav();

// AULA 10
function initAccordion(){
    const listaAccordion = document.querySelectorAll('[data-anime="accordion"] dt');

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
function initScroll(){
    const links_internos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
    if(links_internos.length){
        function irSessao(event){
            event.preventDefaut;
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href);
            section.scrollIntoView({
                block: "start",
                behavior: "smooth"
            });

            /* ALTERNATIVA
            const topSection = section.offsetTop;

            window.scrollTo({
                top: topSection,
                behavior: 'smooth',
            });*/
        }
        links_internos.forEach(link => {
            link.addEventListener('click', irSessao);
        });
    }
}
initScroll();

// AULA 12
function initAnimaScroll(){
    const sections = document.querySelectorAll('[data-anime="scroll"]');
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
