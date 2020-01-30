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
