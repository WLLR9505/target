"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RL = require("readline-sync");
var colors_1 = require("./colors");
var input = '';
function menu(menuList, control) {
    var posSeletor = 0;
    var nItens = menuList.length;
    function AtualizaMenu() {
        for (var i2 = 0; i2 < nItens; i2++) {
            if (posSeletor == i2) {
                console.log(colors_1.color.cor_ciano + " " + menuList[i2] + " " + colors_1.color.cor_reset);
            }
            else {
                console.log("" + menuList[i2]);
            }
        }
        console.log("\n");
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