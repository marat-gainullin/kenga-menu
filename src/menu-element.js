import Ui from 'kenga/utils';
import Widget from 'kenga/widget';

class MenuElement extends Widget {
    constructor() {
        super();
        const self = this;

        this.opaque = true;

        let subMenu = null;
        Object.defineProperty(this, 'subMenu', {
            get: function() {
                return subMenu;
            },
            set: function(aValue) {
                if (subMenu !== aValue) {
                    subMenu = aValue;
                    if (subMenu) {
                        self.element.classList.add('p-menu-item-submenu');
                    } else {
                        self.element.classList.remove('p-menu-item-submenu');
                    }
                }
            }
        });
        Ui.on(this.element, Ui.Events.MOUSEOVER, evt => {
            if (Ui.isMenuSession()) {
                self.parent.forEach(item => {
                    if (item.subMenu)
                        item.subMenu.close();
                });
                if (subMenu) {
                    subMenu.showRelativeTo(self.element, !self.parent.element.className.includes('menu-bar'));
                }
            }
        });
    }
}

export default MenuElement;