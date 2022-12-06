import Ui from 'kenga/utils';
import Container from 'kenga/container';

class Menu extends Container {
    constructor() {
        super();
        const self = this;

        this.element.classList.add('p-menu');
        this.element.id = `p-${Ui.next()}`;

        const gapsStyle = document.createElement('style');
        gapsStyle.innerHTML =
                `
                div#${self.element.id} > .p-widget {display: block;}
                div#${self.element.id} > .p-tabs {display: flex;}
                div#${self.element.id} > .p-holy-grail-column {display: flex;}
                div#${self.element.id} > .p-box-vertical {display: flex;}
                `;
        this.element.appendChild(gapsStyle);

        function showRelativeTo(anElement, horizontal = true, ltr = true, ttb = true) {
            ltr = ltr || true
            ttb = ttb || true
            if (!self.element.parentElement) {
                const targetTop = Ui.absoluteTop(anElement);
                const targetLeft = Ui.absoluteLeft(anElement);
                if (horizontal) {
                    self.element.classList.remove('p-menu-horizontal-rel');
                    self.element.classList.add('p-menu-vertical-rel');
                    const top = targetTop;
                    const left = targetLeft + anElement.offsetWidth;
                    self.element.style.top = `${top}px`;
                    self.element.style.left = `${left}px`;
                    document.body.appendChild(self.element);
                    if (!ltr || left + self.element.offsetWidth > window.innerWidth) {
                        self.element.style.left = `${targetLeft - self.element.offsetWidth}px`;
                    }
                    if (!ttb || top + self.element.offsetHeight > window.innerHeight) {
                        self.element.style.top = `${targetTop + anElement.offsetHeight - self.element.offsetHeight}px`;
                    }
                } else {
                    self.element.classList.remove('p-menu-vertical-rel');
                    self.element.classList.add('p-menu-horizontal-rel');
                    const top = targetTop + anElement.offsetHeight;
                    const left = targetLeft;
                    self.element.style.top = `${top}px`;
                    self.element.style.left = `${left}px`;
                    document.body.appendChild(self.element);
                    if (!ltr || left + self.element.offsetWidth > window.innerWidth) {
                        self.element.style.left = `${targetLeft + anElement.offsetWidth - self.element.offsetWidth}px`;
                    }
                    if (!ttb || top + self.element.offsetHeight > window.innerHeight) {
                        self.element.style.top = `${targetTop - self.element.offsetHeight}px`;
                    }
                }
            }
        }
        Object.defineProperty(this, 'showRelativeTo', {
            get: function () {
                return showRelativeTo;
            }
        });

        function popupRelativeTo(anElement, horizontal = true, ltr = true, ttb = true) {
            Ui.startMenuSession(self);
            showRelativeTo(anElement, horizontal, ltr, ttb);
        }
        Object.defineProperty(this, 'popupRelativeTo', {
            get: function () {
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
            if (left + self.element.offsetWidth > window.innerWidth) {
                self.element.style.left = `${left - self.element.offsetWidth}px`;
            }
            if (top + self.element.offsetHeight > window.innerHeight) {
                self.element.style.top = `${top - self.element.offsetHeight}px`;
            }
        }
        Object.defineProperty(this, 'showAt', {
            get: function () {
                return showAt;
            }
        });

        function popupAt(left, top) {
            Ui.startMenuSession(self);
            showAt(left, top);
        }
        Object.defineProperty(this, 'popupAt', {
            get: function () {
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
            get: function () {
                return close;
            }
        });
    }
}

export default Menu;
