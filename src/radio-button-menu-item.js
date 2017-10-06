import BooleanMenuItem from './boolean-menu-item';

class RadioMenuItem extends BooleanMenuItem {
    constructor(text, selected, onActionPerformed) {
        if (arguments.length < 2)
            selected = false;
        if (arguments.length < 1)
            text = '';
        const radio = document.createElement('input');
        radio.type = 'radio';

        super(radio, text, selected, onActionPerformed);
        const self = this;
    }
}

export default RadioMenuItem;