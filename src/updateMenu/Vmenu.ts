import { Controls } from "../../dist";

import colors = require('../colors');

export function updateMenuV(menu : any, control : Controls, cl : any) {
    for (var i2 = 0; i2 < menu.length; i2++) {

        if(Array.isArray(menu[i2])) { //caso seja o menu flexível
            if (control.pos1 == i2) {
                process.stdout.write(`${cl[0][2]} ${menu[i2][0]} ${colors[15][1]}\n`);//marca posição do seletor
            } else {
                process.stdout.write(`${menu[i2][0]}\n`);
            }
        } else {
            if (control.pos1 == i2) {
                process.stdout.write(`${cl[0][2]} ${menu[i2]} ${colors[15][1]}\n`);//marca posição do seletor
            } else {
                process.stdout.write(`${menu[i2]}\n`);
            }
        }
    }
    process.stdout.write('\n');
}