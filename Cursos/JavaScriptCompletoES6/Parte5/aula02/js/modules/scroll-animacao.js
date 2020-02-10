// AULA 12
export default function initAnimaScroll(){
    const classAtivo = "ativo";
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    if(sections.length){
        const wd_metade = window.innerHeight*0.6;
        function animarScroll(){
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - wd_metade) < 0;
                if(isSectionVisible){
                    section.classList.add(classAtivo);
                }
            });
        }
        animarScroll();
        window.addEventListener('scroll', animarScroll);
    }
}
