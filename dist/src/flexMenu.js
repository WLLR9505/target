"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RL = require("readline-sync");
var Hmenu_1 = require("./updateMenu/Hmenu");
var Vmenu_1 = require("./updateMenu/Vmenu");
var VsubMenu_1 = require("./updateMenu/VsubMenu");
var colors = require("./colors");
var input = '';
function flexMenu(control, color, menu, mode) {
    var cl = colors.filter(function (e) { return e[0] == color; });
    function subMenu(menu, submenu) {
        function updateSubmenu() {
            if (mode === 'h' || mode === 'H') {
                Hmenu_1.updateMenuH(menu, control, cl);
                var spaces = 0;
                for (var i = 0; i <= control.pos1; i++) {
                    spaces += menu[i][0].length + 2;
                }
                process.stdout.write('\n');
                for (var i = 0; i < submenu.length; i++) {
                    if (control.pos2 == i) {
                        process.stdout.write(("" + cl[0][2] + submenu[i] + colors[15][1] + "\n").padStart(spaces + 12));
                    }
                    else {
                        process.stdout.write((submenu[i] + "\n").padStart(spaces));
                    }
                }
                process.stdout.write("\n\n");
            }
            else {
                VsubMenu_1.updatesubMenuV(menu, submenu, control, cl);
            }
        }
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
            updateSubmenu();
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
    var c = colors.filter(function (e) { return e[0] == color; });
    mode == 'h' ? Hmenu_1.updateMenuH(menu, control, cl) : Vmenu_1.updateMenuV(menu, control, cl);
    function showMenu() {
        if (input == control.left || input == control.up)
            control.pos1--;
        else if (input == control.right || input == control.down)
            control.pos1++;
        if (control.pos1 == menu.length)
            control.pos1 = 0;
        else if (control.pos1 < 0)
            control.pos1 = menu.length - 1;
        console.clear();
        mode == 'h' ? Hmenu_1.updateMenuH(menu, control, cl) : Vmenu_1.updateMenuV(menu, control, cl);
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
    if (!menu[control.pos1][1])
        return menu[control.pos1];
    subMenu(menu, menu[control.pos1][1]);
}
exports.flexMenu = flexMenu;
//# sourceMappingURL=flexMenu.js.map