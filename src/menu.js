import Container from 'kenga/container';
import Popup from 'kenga/popup';
import Ui from 'kenga/utils';

class Menu extends Container {
    constructor() {
        super();

        const self = this
        this.element.classList.add('p-menu');
        const popup = new Popup(this.element)

        function showRelativeTo(anElement, horizontal = false, leftToRight = true, topToBottom = true) {
            popup.showRelativeTo(anElement, horizontal, leftToRight, topToBottom)
        }
        Object.defineProperty(this, 'showRelativeTo', {
            get: function () {
                return showRelativeTo;
            }
        });

        function popupRelativeTo(anElement, horizontal = true, leftToRight = true, topToBottom = true) {
            Ui.startPopupSession(self)
            popup.showRelativeTo(anElement, horizontal, leftToRight, topToBottom)
        }
        Object.defineProperty(this, 'popupRelativeTo', {
            get: function () {
                return popupRelativeTo;
            }
        });

        function showAt(left, top) {
            popup.showAt(left, top)
        }
        Object.defineProperty(this, 'showAt', {
            get: function () {
                return showAt;
            }
        });

        function popupAt(left, top) {
            Ui.startPopupSession(self)
            popup.showAt(left, top)
        }
        Object.defineProperty(this, 'popupAt', {
            get: function () {
                return popupAt;
            }
        });

        Object.defineProperty(this, 'shown', {
            get: function () {
                return popup.shown;
            }
        });

        function close() {
            popup.close()
            self.forEach(item => {
                if (item.subMenu)
                    item.subMenu.close();
            });
        }
        Object.defineProperty(this, 'close', {
            get: function () {
                return close;
            }
        });
    }
}

export default Menu;
