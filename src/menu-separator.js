import MenuElement from './menu-element';

class MenuSeparator extends MenuElement {
    constructor() {
        super();

        const self = this;

        this.opaque = true;

        this.element.classList.add('p-menu-separator');
    }
}

export default MenuSeparator;