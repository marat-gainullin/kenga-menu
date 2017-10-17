/* global expect */
/* global NaN, Promise */
import '../src/layout.css';
import '../src/theme.css';

import Invoke from 'septima-utils/invoke';
import Logger from 'septima-utils/logger';
import Resource from 'septima-remote/resource';
import Ui from 'kenga/utils';
import Font from 'kenga/font';
import Color from 'kenga/color';
import Cursor from 'kenga/cursor';
import ButtonGroup from 'kenga-containers/button-group';
import Button from 'kenga-buttons/button';
import Menu from '../src/menu';
import MenuBar from '../src/menu-bar';
import MenuItem from '../src/menu-item';
import MenuSeparator from '../src/menu-separator';
import CheckBoxMenuItem from '../src/check-box-menu-item';
import RadioButtonMenuItem from '../src/radio-button-menu-item';
import DropDownButton from 'kenga-buttons/drop-down-button';

describe('Menu Api', () => {

    function expectValue(obj, prop, value) {
        obj[prop] = value;
        expect(obj[prop]).toEqual(value);
    }

    function expectWidget(widget) {
        expect('name' in widget).toBeTruthy();
        expectValue(widget, 'name', 'widgetName');
        expect('element' in widget).toBeTruthy();
        expect('parent' in widget).toBeTruthy();
        expectValue(widget, 'parent', new widget.constructor());
        expectValue(widget, 'parent', null);
        expect('title' in widget).toBeTruthy();
        expectValue(widget, 'title', '2');
        expectValue(widget, 'title', '1');
        expect('left' in widget).toBeTruthy();
        expectValue(widget, 'left', 30);
        expect('width' in widget).toBeTruthy();
        expectValue(widget, 'width', 50);
        expect('top' in widget).toBeTruthy();
        expectValue(widget, 'top', 57);
        expect('height' in widget).toBeTruthy();
        expectValue(widget, 'height', 80);
        expect('enabled' in widget).toBeTruthy();
        expectValue(widget, 'enabled', false);
        expectValue(widget, 'enabled', true);
        expectValue(widget, 'enabled', true);
        expectValue(widget, 'enabled', false);
        expectValue(widget, 'enabled', true);
        expect('visible' in widget).toBeTruthy();
        expectValue(widget, 'visible', false);
        expectValue(widget, 'visible', true);
        expectValue(widget, 'visible', true);
        expectValue(widget, 'visible', false);
        expectValue(widget, 'visible', true);
        expect('opaque' in widget).toBeTruthy();
        expectValue(widget, 'opaque', false);
        expectValue(widget, 'opaque', true);
        expectValue(widget, 'opaque', true);
        expectValue(widget, 'opaque', false);
        expectValue(widget, 'opaque', true);
        expect('cursor' in widget).toBeTruthy();
        expectValue(widget, 'cursor', Cursor.WAIT);
        expect('background' in widget).toBeTruthy();
        const bg = new Color('#fcfcfc');
        expectValue(widget, 'background', bg);
        expectValue(widget, 'background', bg);
        expectValue(widget, 'background', '#fcfcfa');
        expectValue(widget, 'background', null);
        expect('foreground' in widget).toBeTruthy();
        const fg = new Color(12, 45, 78, 35);
        expectValue(widget, 'foreground', fg);
        expectValue(widget, 'foreground', fg);
        expectValue(widget, 'foreground', '#bbb');
        expectValue(widget, 'foreground', null);
        expect('error' in widget).toBeTruthy();
        expectValue(widget, 'error', 'sample validation message');
        widget.error = null;
        expect('contextMenu' in widget).toBeTruthy();
        expectValue(widget, 'contextMenu', new widget.constructor());
        expect('toolTipText' in widget).toBeTruthy();
        expectValue(widget, 'toolTipText', ' sample tooltip');
        expectValue(widget, 'toolTipText', ' sample tooltip');
        expect('tabIndex' in widget).toBeTruthy();
        expectValue(widget, 'tabIndex', 1);
        expect('focusable' in widget).toBeTruthy();
        expectValue(widget, 'focusable', true);
        expectValue(widget, 'focusable', false);
        expectValue(widget, 'focusable', false);
        expect('font' in widget).toBeDefined();
        const fnt = new Font('Arial', Font.Style.BOLD_ITALIC, 14);
        expectValue(widget, 'font', fnt);
        expectValue(widget, 'font', fnt);
        expectValue(widget, 'font', null);
        expect(widget.focus).toBeDefined();
        expect(typeof widget.focus).toEqual('function');
        widget.focus();

        expect('onShow' in widget).toBeTruthy();
        expectValue(widget, 'onShow', function () {});
        expectValue(widget, 'onShow', null);
        expect('onHide' in widget).toBeTruthy();
        expectValue(widget, 'onHide', function () {});
        expectValue(widget, 'onHide', null);
        expect('onMouseRelease' in widget).toBeTruthy();
        expectValue(widget, 'onMouseRelease', function () {});
        expectValue(widget, 'onMouseRelease', null);
        expect('onFocusLost' in widget).toBeTruthy();
        expectValue(widget, 'onFocusLost', function () {});
        expectValue(widget, 'onFocusLost', null);
        expect('onMousePress' in widget).toBeTruthy();
        expectValue(widget, 'onMousePress', function () {});
        expectValue(widget, 'onMousePress', null);
        expect('onMouseEnter' in widget).toBeTruthy();
        expectValue(widget, 'onMouseEnter', function () {});
        expectValue(widget, 'onMouseEnter', null);
        expect('onMouseMove' in widget).toBeTruthy();
        expectValue(widget, 'onMouseMove', function () {});
        expectValue(widget, 'onMouseMove', null);
        expect('onAction' in widget).toBeTruthy();
        expectValue(widget, 'onAction', function () {});
        expectValue(widget, 'onAction', null);
        expect('onKeyRelease' in widget).toBeTruthy();
        expectValue(widget, 'onKeyRelease', function () {});
        expectValue(widget, 'onKeyRelease', null);
        expect('onKeyType' in widget).toBeTruthy();
        expectValue(widget, 'onKeyType', function () {});
        expectValue(widget, 'onKeyType', null);
        expect('onMouseWheelMove' in widget).toBeTruthy();
        expectValue(widget, 'onMouseWheelMove', function () {});
        expectValue(widget, 'onMouseWheelMove', null);
        expect('onFocus' in widget).toBeTruthy();
        expectValue(widget, 'onFocus', function () {});
        expectValue(widget, 'onFocus', null);
        expect('onMouseClick' in widget).toBeTruthy();
        expectValue(widget, 'onMouseClick', function () {});
        expectValue(widget, 'onMouseClick', null);
        expect('onMouseExit' in widget).toBeTruthy();
        expectValue(widget, 'onMouseExit', function () {});
        expectValue(widget, 'onMouseExit', null);
        expect('onKeyPress' in widget).toBeTruthy();
        expectValue(widget, 'onKeyPress', function () {});
        expectValue(widget, 'onKeyPress', null);
    }

    function expectHorizontalTextPosition(w) {
        const h = [Ui.HorizontalPosition.LEFT, Ui.HorizontalPosition.CENTER, Ui.HorizontalPosition.RIGHT];
        h.forEach(hi => {
            w.horizontalTextPosition = hi;
            expect(w.horizontalTextPosition).toEqual(hi);
        });
    }

    function expectMenuItemStructure() {
        const image = document.createElement('image');
        const menuItem1 = new MenuItem('txt', image, () => {
        });
        expect(menuItem1.text).toEqual('txt');
        expect(menuItem1.icon).toBe(image);
        expect(menuItem1.onAction).toBeTruthy();
        expectHorizontalTextPosition(menuItem1, Ui);
        expectWidget(menuItem1, Font, Color, Cursor);

        const menuItem2 = new MenuItem('txt', image);
        expect(menuItem2.text).toEqual('txt');
        expect(menuItem2.icon).toBe(image);
        expect(menuItem2.onAction).toBeFalsy();
        expectHorizontalTextPosition(menuItem2, Ui);

        const menuItem3 = new MenuItem('txt');
        expect(menuItem3.text).toEqual('txt');
        expect(menuItem3.icon).toBeNull();
        expect(menuItem3.onAction).toBeFalsy();
        expectHorizontalTextPosition(menuItem3, Ui);

        const menuItem4 = new MenuItem();
        expect(menuItem4.text).toEqual('');
        expect(menuItem4.icon).toBeNull();
        expect(menuItem4.onAction).toBeFalsy();
        expectHorizontalTextPosition(menuItem4, Ui);

        menuItem4.text = 'Sample label';
        expect(menuItem4.iconTextGap).toEqual(4);
        return Resource.Icon.load('base/assets/binary-content.png')
                .then(loaded => {
                    menuItem4.icon = loaded;
                })
                .catch((e) => {
                    throw e;
                });
    }
    it('MenuItem.Structure', done => {
        expectMenuItemStructure()
                .then(done)
                .catch(done.fail);
    });
    it('MenuItem.Markup', done => {
        const menuItem = new MenuItem();
        document.body.appendChild(menuItem.element);
        menuItem.text = 'Sample menu item';
        expect(menuItem.iconTextGap).toEqual(4);
        Resource.Icon.load('base/assets/binary-content.png')
                .then(loaded => {
                    menuItem.icon = loaded;
                    // defaults
                    // right text
                    expect(menuItem.horizontalTextPosition).toEqual(Ui.HorizontalPosition.RIGHT);
                    ((() => {
                        const image = menuItem.element.firstElementChild;
                        const paragraph = menuItem.element.lastElementChild;
                        expect(image.offsetLeft).toEqual(0);
                        expect(paragraph.offsetLeft).toEqual(16 + 4);
                    })());
                    // left text
                    menuItem.horizontalTextPosition = Ui.HorizontalPosition.LEFT;
                    ((() => {
                        const image = menuItem.element.lastElementChild;
                        const paragraph = menuItem.element.firstElementChild;
                        expect(paragraph.offsetLeft).toEqual(0);
                        expect(image.offsetLeft).toEqual(paragraph.offsetWidth + 4);
                    })());
                    document.body.removeChild(menuItem.element);
                })
                .then(done)
                .catch(done.fail);
    });
    function expectBooleanMenuItemStructure(BooleanMenuItem) {
        const menuItem1 = new BooleanMenuItem('txt', true, () => {
        });
        expect(menuItem1.text).toEqual('txt');
        expect(menuItem1.selected).toBe(true);
        expect(menuItem1.onAction).toBeTruthy();
        expectHorizontalTextPosition(menuItem1, Ui);
        expectWidget(menuItem1, Font, Color, Cursor);

        const menuItem2 = new BooleanMenuItem('txt', true);
        expect(menuItem2.text).toEqual('txt');
        expect(menuItem2.selected).toBe(true);
        expect(menuItem2.onAction).toBeFalsy();
        expectHorizontalTextPosition(menuItem2, Ui);

        const menuItem3 = new BooleanMenuItem('txt');
        expect(menuItem3.text).toEqual('txt');
        expect(menuItem3.selected).toBe(false);
        expect(menuItem3.onAction).toBeFalsy();
        expectHorizontalTextPosition(menuItem3, Ui);

        const menuItem4 = new BooleanMenuItem();
        expect(menuItem4.text).toEqual('');
        expect(menuItem4.selected).toBe(false);
        expect(menuItem4.onAction).toBeFalsy();
        expectHorizontalTextPosition(menuItem4, Ui);

        return Promise.resolve();
    }

    function expectBooleanMenuItemMarkup(BooleanMenuItem) {
        const menuItem = new BooleanMenuItem();
        document.body.appendChild(menuItem.element);
        menuItem.text = 'Are you beatyful?';

        menuItem.onAction = evt => {
            Logger.info(`Action performed on '${evt.source.constructor.name}'`);
        };
        menuItem.onValueChange = evt => {
            Logger.info(`Value changed on '${evt.source.constructor.name}' oldValue: ${evt.oldValue}; newValue: ${evt.newValue}`);
        };

        spyOn(menuItem, 'onValueChange');

        expect(menuItem.value).toBe(false);
        expect(menuItem.selected).toBe(false);
        menuItem.selected = true;
        expect(menuItem.selected).toBe(true);
        expect(menuItem.value).toBe(true);
        menuItem.value = false;
        expect(menuItem.value).toBe(false);
        expect(menuItem.selected).toBe(false);
        menuItem.selected = true;
        expect(menuItem.selected).toBe(true);
        expect(menuItem.value).toBe(true);
        menuItem.value = null;
        expect(menuItem.value).toBeNull();
        expect(menuItem.selected).toBeNull();
        return new Promise(resolve => {
            Invoke.later(() => {
                expect(menuItem.onValueChange.calls.count()).toEqual(4);
                document.body.removeChild(menuItem.element);
                resolve();
            });
        });
    }
    it('CheckBoxMenuItem.Structure', done => {
        expectBooleanMenuItemStructure(CheckBoxMenuItem)
                .then(done)
                .catch(done.fail);
    });
    it('CheckBoxMenuItem.Markup', done => {
        expectBooleanMenuItemMarkup(CheckBoxMenuItem)
                .then(done)
                .catch(done.fail);
    });
    it('RadioButtonMenuItem.Structure', done => {
        expectBooleanMenuItemStructure(RadioButtonMenuItem)
                .then(done)
                .catch(done.fail);
    });
    it('RadioButtonMenuItem.Markup', done => {
        expectBooleanMenuItemMarkup(RadioButtonMenuItem)
                .then(done)
                .catch(done.fail);
    });

    function fillMenu(RootMenu) {
        const menu = new RootMenu();

        const fileItem = new MenuItem('File');
        fileItem.subMenu = new Menu();
        fileItem.subMenu.add(new MenuItem('Save'));
        fileItem.subMenu.add(new MenuItem('Save As'));
        fileItem.subMenu.add(new MenuItem('Exit'));
        menu.add(fileItem);

        const settingsItem = new MenuItem('Settings');
        settingsItem.subMenu = new Menu();
        settingsItem.subMenu.add(new MenuItem('Main'));
        const hardwareItem = new MenuItem('Hardware');
        settingsItem.subMenu.add(hardwareItem);
        hardwareItem.subMenu = new Menu();
        hardwareItem.subMenu.add(new CheckBoxMenuItem('Motorola'));
        hardwareItem.subMenu.add(new RadioButtonMenuItem('LG'));
        hardwareItem.subMenu.add(new RadioButtonMenuItem('Huawei'));
        const buttonGroup = new ButtonGroup();
        for (let m = 0; m < hardwareItem.subMenu.count; m++) {
            const item = hardwareItem.subMenu.child(m);
            item.buttonGroup = buttonGroup;
            expect(item.buttonGroup).toBe(buttonGroup);
        }
        settingsItem.subMenu.add(new MenuItem('Misc'));
        settingsItem.subMenu.add(new MenuSeparator('Misc'));
        settingsItem.subMenu.add(new MenuItem('Other'));
        menu.add(settingsItem);
        return menu;
    }

    it('MenuBar.Markup', () => {
        const menuBar = fillMenu(
                MenuBar,
                ButtonGroup,
                MenuItem,
                CheckBoxMenuItem,
                RadioButtonMenuItem,
                MenuSeparator,
                Menu);
        document.body.appendChild(menuBar.element);
        document.body.removeChild(menuBar.element);
    });
    it('PopupMenu.Markup', () => {
        const button = new Button('Right click me');
        document.body.appendChild(button.element);

        const menu = fillMenu(
                Menu,
                ButtonGroup,
                MenuItem,
                CheckBoxMenuItem,
                RadioButtonMenuItem,
                MenuSeparator,
                Menu);
        button.contextMenu = menu;
        expect(button.contextMenu).toBe(menu);
        document.body.removeChild(button.element);
    });

    it('DropDownMenu.Markup', (done) => {
        const button = new DropDownButton('Click my chevron');
        document.body.appendChild(button.element);
        button.onAction = evt => {
            Logger.info(`Action performed on '${evt.source.constructor.name}'`);
        };
        const menu = fillMenu(
                Menu,
                ButtonGroup,
                MenuItem,
                CheckBoxMenuItem,
                RadioButtonMenuItem,
                MenuSeparator,
                Menu);
        button.dropDownMenu = menu;
        expect(button.dropDownMenu).toBe(menu);
        menu.showRelativeTo(button, false);
        Invoke.later(() => {
            menu.close();
            done();
            document.body.removeChild(button.element);
        });
    });
});
