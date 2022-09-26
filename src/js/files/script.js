// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener('click', (event) => {
    const target = event.target;
    event.preventDefault();

    if (target.closest('[data-parent]')) { 
        const parentID = target.closest('[data-parent]').dataset.parent;
        handleSubmenu(parentID);
    }

    if (target.closest('.top-header-menu__item_catalog')) {
        document.documentElement.classList.add('open-catalog');
    }

    if (target.closest('.menu-catalog__back')) { 
        document.documentElement.classList.remove('open-catalog');
    }

    if (target.closest('.sub-menu-catalog__back')) { 
     
        const subMenu = document.querySelector('.sub-menu-catalog._open');
        const activeSubmenu = subMenu.querySelector('.sub-menu-catalog__row._active');
 
        closeSubmenu(subMenu, activeSubmenu, true); 
    }

});

const closeSubmenu = (subMenu, activeSubmenu = undefined, closeAll = false) => { 
    if (activeSubmenu && closeAll) {
        subMenu.classList.remove('_open');
        activeSubmenu.classList.remove('_active');
    } else {
        activeSubmenu.classList.remove('_active');
    }
} 

const handleSubmenu = (id) => { 
    const submenuBlock = document.querySelector(`[data-submenu="${id}"]`);
    const submenu = submenuBlock.closest('.sub-menu-catalog');
    const activeSubmenu = submenu.querySelector('.sub-menu-catalog__row._active');

    if (activeSubmenu && activeSubmenu == submenuBlock ) {  
        closeSubmenu(submenu, activeSubmenu, true); 
        return;
    }

    if (activeSubmenu) {
        closeSubmenu(submenu,activeSubmenu, false);
    }

    submenu.classList.add('_open');  
    submenuBlock.classList.add('_active');  
} 

const menuBlocks = document.querySelectorAll('.sub-menu-catalog__row');
menuBlocks.forEach(block => { 
    const blockColumnsCount = block.querySelectorAll('.sub-menu-catalog__list').length;
    block.classList.add(`sub-menu-catalog__row_${blockColumnsCount}`);
});



 