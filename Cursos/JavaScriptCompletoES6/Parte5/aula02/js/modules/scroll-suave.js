// AULA 11
export default function initScroll(){
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
