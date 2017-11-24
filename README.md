# kenga-menu
Kenga menu bar and popup menu widgets.

# Install
To install `kenga-menu` package to your project, type the following command:
`npm install kenga-menu --save`

# Using
To use menu you can write something like this: `const mi = new MenuItem('Preview'); mi.onAction = () => {...}; const menu = new Menu(); menu.add(mi); menu.popupRelativeTo(<DOM element>)`.

# Architecture
`MenuBar` container contains `MenuItem` instances and pops theirs submenu up when user click on an item.
`Menu` container contains `MenuItem` instances. It can be used as standalone popup menu, widget context menu and as a submenu.
`MenuItem` widget is label like widget, which can be used as a `Menu` child and can have a sub menu.
The `CheckBoxMenuItem` and `RadioButtonMenuItem` widgets include check box and radio button and can be used within button group like `CheckBox` and `RadioButton` widgets.
