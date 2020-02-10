// AULA 10
export default function initAccordion(){
    const classAtivo = "ativo";
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
