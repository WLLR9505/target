"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RL = require("readline-sync");
var input = '';
var colors;
colors = [
    ['gray', '\x1b[01;40m'],
    ['red', '\x1b[01;31m'],
    ['green', '\x1b[01;32m'],
    ['yellow', '\x1b[01;33m'],
    ['blue', '\x1b[01;34m'],
    ['magenta', '\x1b[01;35m'],
    ['cyan', '\x1b[01;36m'],
    ['black', '\x1b[22;30m'],
    ['white', '\x1b[01;37m'],
    ['darkred', '\x1b[22;31m'],
    ['darkgreen', '\x1b[22;32m'],
    ['darkyellow', '\x1b[22;33m'],
    ['darkblue', '\x1b[22;34m'],
    ['darkmagenta', '\x1b[22;35m'],
    ['darkcyan', '\x1b[22;36m'],
    ['reset', '\x1b[0m']
];
function menu(menuList, control, color) {
    var posSeletor = 0;
    var nItens = menuList.length;
    var c = colors.filter(function (e) { return e[0] == color; });
    function AtualizaMenu() {
        for (var i2 = 0; i2 < nItens; i2++) {
            if (posSeletor == i2) {
                console.log(c[0][1] + " " + menuList[i2] + " " + colors[15][1]);
            }
            else {
                console.log("" + menuList[i2]);
            }
        }
        console.log('\n');
    }
    function ShowMenu() {
        if (input == control.up)
            posSeletor--;
        else if (input == control.down)
            posSeletor++;
        if (posSeletor == nItens)
            posSeletor = 0;
        else if (posSeletor < 0)
            posSeletor = nItens - 1;
        console.clear();
        AtualizaMenu();
    }
    do {
        ShowMenu();
        input = RL.keyIn('', {
            hideEchoBack: true,
            mask: ''
        });
        if (input == control.back) {
            return -1;
        }
    } while (input != control.select);
    return posSeletor;
}
exports.menu = menu;
//# sourceMappingURL=simpleMenu.js.map