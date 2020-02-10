// AULA 9
export default function initTabNav(){
    const classAtivo = "ativo";
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
