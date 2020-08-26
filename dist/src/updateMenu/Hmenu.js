"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors = require("../colors");
function updateMenuH(menu, control, cl) {
    for (var i2 = 0; i2 < menu.length; i2++) {
        if (control.pos1 == i2) {
            process.stdout.write("" + cl[0][2] + menu[i2][0] + "   " + colors[15][1]);
        }
        else {
            process.stdout.write(menu[i2][0] + "   ");
        }
    }
    process.stdout.write('\n');
}
exports.updateMenuH = updateMenuH;
//# sourceMappingURL=Hmenu.js.map