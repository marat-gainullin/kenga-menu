import Ui from 'kenga/utils';
import Container from 'kenga/container';

class MenuBar extends Container {
    constructor() {
        super();
        const self = this;

        this.element.classList.add('p-menu-bar');
        this.element.id = `p-${Ui.next()}`;

        const gapsStyle = document.createElement('style');
        gapsStyle.innerHTML =
            `div#${self.element.id} > .p-widget {height: 100%;display: inline-block;}`;
        this.element.appendChild(gapsStyle);

        function findWidgetByElement(anElement) {
            let currentElement = anElement;
            while (currentElement !== null && !('p-widget' in currentElement) && currentElement !== document.body)
                currentElement = currentElement.parentElement;
            return currentElement !== document.body && currentElement !== null ? currentElement['p-widget'] : null;
        }

        function startItem(target) {
            const item = findWidgetByElement(target);
            if (item && item.subMenu) {
                Ui.startPopupSession(self);
                item.subMenu.showRelativeTo(item.element, false);
            }
        }

        Ui.on(this.element, Ui.Events.MOUSEDOWN, evt => {
            evt.stopPropagation();
            startItem(evt.target);
        }, true);
        Ui.on(this.element, Ui.Events.CLICK, evt => {
            evt.stopPropagation();
            startItem(evt.target);
        }, true);

        function close() {
            if (self.element.parentElement) {
                self.forEach(item => {
                    if (item.subMenu)
                        item.subMenu.close();
                });
            }
        }
        Object.defineProperty(this, 'close', {
            get: function() {
                return close;
            }
        });
    }
}

export default MenuBar;