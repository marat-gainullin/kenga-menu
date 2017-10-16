import BooleanMenuItem from './boolean-menu-item';

class CheckMenuItem extends BooleanMenuItem {
    constructor(text, selected, onAction) {
        if (arguments.length < 2)
            selected = false;
        if (arguments.length < 1)
            text = '';
        const check = document.createElement('input');
        check.type = 'checkbox';

        super(check, text, selected, onAction);
        const self = this;
    }
}

export default CheckMenuItem;