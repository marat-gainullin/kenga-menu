import Id from 'septima-utils/id';
import Ui from 'kenga/utils';
import Container from 'kenga/container';

class Menu extends Container {
    constructor() {
        super();
        const self = this;

        this.element.classList.add('p-menu');
        this.element.id = `p-${Id.generate()}`;

        const gapsStyle = document.createElement('style');
        gapsStyle.innerHTML =
            `div#${self.element.id} > .p-widget {display: block;}`;
        this.element.appendChild(gapsStyle);

        function showRelativeTo(anElement, horizontal = true) {
            if (!self.element.parentElement) {
                self.element.classList.remove('p-menu-horizontal-rel');
                self.element.classList.remove('p-menu-vertical-rel');
                const top = Ui.absoluteTop(anElement);
                const left = Ui.absoluteLeft(anElement);
                if (horizontal) {
                    self.element.style.top = `${top}px`;
                    self.element.style.left = `${left + anElement.offsetWidth}px`;
                    self.element.classList.add('p-menu-horizontal-rel');
                } else {
                    self.element.style.top = `${top + anElement.offsetHeight}px`;
                    self.element.style.left = `${left}px`;
                    self.element.classList.add('p-menu-vertical-rel');
                }
                document.body.appendChild(self.element);
            }
        }
        Object.defineProperty(this, 'showRelativeTo', {
            get: function() {
                return showRelativeTo;
            }
        });

        function popupRelativeTo(anElement, horizontal = true) {
            Ui.startMenuSession(self);
            showRelativeTo(anElement, horizontal);
        }
        Object.defineProperty(this, 'popupRelativeTo', {
            get: function() {
                return popupRelativeTo;
            }
        });
        
        function showAt(left, top) {
            if (self.element.parentElement)
                throw 'Menu is already shown';
            self.element.classList.remove('p-menu-horizontal-rel');
            self.element.classList.remove('p-menu-vertical-rel');
            self.element.style.top = `${top}px`;
            self.element.style.left = `${left}px`;
            document.body.appendChild(self.element);
        }
        Object.defineProperty(this, 'showAt', {
            get: function() {
                return showAt;
            }
        });

        function popupAt(left, top){
            Ui.startMenuSession(self);
            showAt(left, top);
        }
        Object.defineProperty(this, 'popupAt', {
            get: function() {
                return popupAt;
            }
        });

        function close() {
            if (self.element.parentElement) {
                self.element.parentElement.removeChild(self.element);
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

export default Menu;