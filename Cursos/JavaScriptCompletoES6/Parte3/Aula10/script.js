const classAtivo = "ativo";

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
