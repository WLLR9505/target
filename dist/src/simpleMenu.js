"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RL = require("readline-sync");
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
    function subMenu(menu, submenu) {
        var mTam = 0, subTam = 0;
        var subCima, menuCima, menuBaixo, subBaixo;
        var meiosub = Number((submenu.length / 2).toFixed()) - 1;
        mTam = menu.length;
        subTam = submenu.length;
        menuBaixo = Number((mTam - control.pos1).toFixed());
        menuCima = Number((control.pos1 - 1).toFixed());
        subBaixo = Number((subTam - meiosub).toFixed());
        subCima = Number((meiosub - 1).toFixed());
        if (subCima > menuCima) {
            while (subCima > menuCima) {
                subBaixo++;
                subCima--;
                meiosub--;
            }
        }
        else if (subBaixo > menuBaixo) {
            while (subBaixo > menuBaixo) {
                subCima++;
                subBaixo--;
                meiosub++;
            }
        }
        function updateSubmenu() {
            var nAselecionado = control.pos1;
            var nAmeio = meiosub;
            var inicioSubmenu = nAselecionado - nAmeio;
            for (var i = 0; i < menu.length; i++) {
                if (i == inicioSubmenu || (i > inicioSubmenu && i < (subTam + inicioSubmenu))) {
                    for (var i2 = 0; i2 < subTam; i2++) {
                        if (i2 == control.pos2) {
                            if (i == control.pos1) {
                                process.stdout.write("" + cl[0][1] + ("" + menu[i] + colors[15][1]).padEnd(25));
                                process.stdout.write("" + cl[0][2] + submenu[i2] + colors[15][1] + "\n");
                            }
                            else {
                                process.stdout.write(("" + (menu[i] || '')).padEnd(21));
                                process.stdout.write("" + cl[0][2] + submenu[i2] + colors[15][1] + "\n");
                            }
                        }
                        else if (i == control.pos1) {
                            process.stdout.write("" + cl[0][1] + ("" + menu[i] + colors[15][1]).padEnd(25));
                            process.stdout.write(submenu[i2] + "\n");
                        }
                        else {
                            process.stdout.write(("" + (menu[i] || '')).padEnd(21));
                            process.stdout.write(submenu[i2] + "\n");
                        }
                        i++;
                    }
                }
                if (i < menu.length) {
                    process.stdout.write(menu[i] + "\n");
                }
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
    function updateMenu() {
        for (var i2 = 0; i2 < menu.length; i2++) {
            if (control.pos1 == i2) {
                process.stdout.write(cl[0][2] + " " + menu[i2] + " " + colors[15][1] + "\n");
            }
            else {
                process.stdout.write(menu[i2] + "\n");
            }
        }
        process.stdout.write('\n');
    }
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
        updateMenu();
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
        subMenu(menu, submenu);
    }
    return control;
}
exports.menu = menu;
//# sourceMappingURL=simpleMenu.js.map