"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RL = require("readline-sync");
var Vmenu_1 = require("./updateMenu/Vmenu");
var VsubMenu_1 = require("./updateMenu/VsubMenu");
var input = '';
var colors;
colors = [
    ['gray', '\x1b[01;40m', '\x1b[01;40m'],
    ['red', '\x1b[01;41m', '\x1b[01;31m'],
    ['green', '\x1b[01;42m', '\x1b[01;32m'],
    ['yellow', '\x1b[01;43m', '\x1b[01;33m'],
    ['blue', '\x1b[01;44m', '\x1b[01;34m'],
    ['magenta', '\x1b[01;45m', '\x1b[01;35m'],
    ['cyan', '\x1b[01;46m', '\x1b[01;36m'],
    ['black', '\x1b[22;40m', '\x1b[22;30m'],
    ['white', '\x1b[01;47m', '\x1b[01;37m'],
    ['darkred', '\x1b[22;41m', '\x1b[22;31m'],
    ['darkgreen', '\x1b[22;42m', '\x1b[22;32m'],
    ['darkyellow', '\x1b[22;43m', '\x1b[22;33m'],
    ['darkblue', '\x1b[22;44m', '\x1b[22;34m'],
    ['darkmagenta', '\x1b[22;45m', '\x1b[22;35m'],
    ['darkcyan', '\x1b[22;46m', '\x1b[22;36m'],
    ['reset', '\x1b[0m', '\x1b[0m']
];
function menu(control, color, menu, submenu) {
    control.resetPos();
    var cl = colors.filter(function (e) { return e[0] == color; });
    function subMenu(submenu) {
        VsubMenu_1.updatesubMenuV(menu, submenu, control, cl);
        function showMenu() {
            if (input == control.up)
                control.pos2--;
            else if (input == control.down)
                control.pos2++;
            if (control.pos2 == submenu.length)
                control.pos2 = 0;
            else if (control.pos2 < 0)
                control.pos2 = submenu.length - 1;
            console.clear();
            VsubMenu_1.updatesubMenuV(menu, submenu, control, cl);
        }
        do {
            showMenu();
            input = RL.keyIn('', {
                hideEchoBack: true,
                mask: ''
            });
            if (input == control.back) {
                control.pos2 = -1;
                return control;
            }
        } while (input != control.select);
        return control;
    }
    Vmenu_1.updateMenuV(menu, control, cl);
    function showMenu() {
        if (input == control.up)
            control.pos1--;
        else if (input == control.down)
            control.pos1++;
        if (control.pos1 == menu.length)
            control.pos1 = 0;
        else if (control.pos1 < 0)
            control.pos1 = menu.length - 1;
        console.clear();
        Vmenu_1.updateMenuV(menu, control, cl);
    }
    do {
        showMenu();
        input = RL.keyIn('', {
            hideEchoBack: true,
            mask: ''
        });
        if (input == control.back) {
            control.pos1 = -1;
            return control;
        }
    } while (input != control.select);
    if (submenu) {
        subMenu(submenu);
    }
}
exports.menu = menu;
//# sourceMappingURL=simpleMenu.js.map