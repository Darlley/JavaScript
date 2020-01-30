const classAtivo = "ativo";

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
