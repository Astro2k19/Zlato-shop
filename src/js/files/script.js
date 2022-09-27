// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener('click', (event) => {
    const target = event.target;

    if (target.closest('[data-parent]')) { 
        const parentID = target.closest('[data-parent]').dataset.parent;
        handleSubmenu(parentID);
        event.preventDefault();
    }

    if (target.closest('.top-header-menu__item_catalog')) {
        document.documentElement.classList.add('open-catalog');
        event.preventDefault();
    }

    if (target.closest('.menu-catalog__back')) { 
        document.documentElement.classList.remove('open-catalog');
        event.preventDefault();
    }

    if (target.closest('.sub-menu-catalog__back')) { 
        event.preventDefault();
        const subMenu = document.querySelector('.sub-menu-catalog._open');
        const activeSubmenu = subMenu.querySelector('.sub-menu-catalog__row._active');
 
        closeSubmenu(subMenu, activeSubmenu, true); 
    }

});

export const closeSubmenu = (subMenu, activeSubmenu = undefined, closeAll = false) => { 
  
    if (activeSubmenu && closeAll) {
        subMenu.classList.remove('_open');
        activeSubmenu.classList.remove('_active');
    } else {
        activeSubmenu.classList.remove('_active');
    }

    const activeTab = subMenu.closest('.menu-catalog')
                             .querySelector(`[data-parent="${activeSubmenu.dataset.submenu}"]`);

    activeTab.classList.remove('_active-title');  
} 

const handleSubmenu = (id) => { 
    const submenuBlock = document.querySelector(`[data-submenu="${id}"]`);
    const submenu = submenuBlock.closest('.sub-menu-catalog');
    const activeSubmenu = submenu.querySelector('.sub-menu-catalog__row._active');
    const subMenuNav = submenu.closest('.menu-catalog');

    if (activeSubmenu && activeSubmenu == submenuBlock ) {  
        closeSubmenu(submenu, activeSubmenu, true); 
        return;
    } 
 
    if (activeSubmenu) {   
        closeSubmenu(submenu, activeSubmenu, false);
    } 

    submenu.classList.add('_open');  
    submenuBlock.classList.add('_active');   
    subMenuNav.querySelector(`[data-parent="${id}"]`).classList.add('_active-title'); 
} 

const menuBlocks = document.querySelectorAll('.sub-menu-catalog__row');
menuBlocks.forEach(block => { 
    const blockColumnsCount = block.querySelectorAll('.sub-menu-catalog__list').length;
    block.classList.add(`sub-menu-catalog__row_${blockColumnsCount}`);
});



 