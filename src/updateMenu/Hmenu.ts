import { Controls } from "../../dist";

import colors = require('../colors');

export function updateMenuH(menu : any, control : Controls, cl : any) {
    for (let i2 = 0; i2 < menu.length; i2++) {
        if (control.pos1 == i2) {
            process.stdout.write(`${cl[0][2]}${menu[i2][0]}   ${colors[15][1]}`);//marca posição do seletor
        } else {
            process.stdout.write(`${menu[i2][0]}   `);
        }
    }
    process.stdout.write('\n');
}