"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors = require("../colors");
function updateMenuV(menu, control, cl) {
    for (var i2 = 0; i2 < menu.length; i2++) {
        if (Array.isArray(menu[i2])) {
            if (control.pos1 == i2) {
                process.stdout.write(cl[0][2] + " " + menu[i2][0] + " " + colors[15][1] + "\n");
            }
            else {
                process.stdout.write(menu[i2][0] + "\n");
            }
        }
        else {
            if (control.pos1 == i2) {
                process.stdout.write(cl[0][2] + " " + menu[i2] + " " + colors[15][1] + "\n");
            }
            else {
                process.stdout.write(menu[i2] + "\n");
            }
        }
    }
    process.stdout.write('\n');
}
exports.updateMenuV = updateMenuV;
//# sourceMappingURL=Vmenu.js.map