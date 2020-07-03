import { Controls } from "../../dist";

import colors = require('../colors');

export function updatesubMenuV(menu: any, submenu: any, control: Controls, cl: any) {
    console.clear();
    var mTam = 0, subTam = 0;
    var subCima: number, menuCima: number, menuBaixo: number, subBaixo: number;

    var meiosub = Number((submenu.length / 2).toFixed()) - 1;
    mTam = menu.length;
    subTam = submenu.length;

    menuBaixo = Number((mTam - control.pos1).toFixed());
    menuCima = Number((control.pos1 - 1).toFixed());
    subBaixo = Number((subTam - meiosub).toFixed());
    subCima = Number((meiosub - 1).toFixed());

    if (subCima > menuCima) {
        //Se faltar espaço a cima
        while (subCima > menuCima) {
            //Move o SubMenu para baixo
            subBaixo++;
            subCima--;
            meiosub--;
        }
    } else if (subBaixo > menuBaixo) {
        //Se faltar espaço a baixo
        while (subBaixo > menuBaixo) {
            //Move o SubMenu para cima
            subCima++;
            subBaixo--;
            meiosub++;
        }
    }

    var nAselecionado = control.pos1;
    var nAmeio = meiosub;
    var inicioSubmenu = nAselecionado - nAmeio;

    for (let i = 0; i < menu.length; i++) {
        if (i == inicioSubmenu || (i > inicioSubmenu && i < (subTam + inicioSubmenu))) {
            for (let i2 = 0; i2 < subTam; i2++) {

                if (Array.isArray(menu[i])) {  //caso seja o menu flexível
                    if (i2 == control.pos2) {
                        //item submenu for igual ao selecionado
                        if (i == control.pos1) {
                            //menu e submenu selecionados na mesma linha
                            process.stdout.write(`${cl[0][1]}` + `${menu[i][0]}${colors[15][1]}`.padEnd(25));
                            process.stdout.write(`${cl[0][2]}${submenu[i2]}${colors[15][1]}\n`);

                        } else {
                            process.stdout.write(`${menu[i][0] || ''}`.padEnd(21));
                            process.stdout.write(`${cl[0][2]}${submenu[i2]}${colors[15][1]}\n`);

                        }
                    } else if (i == control.pos1) {
                        //item selecionado no menu
                        process.stdout.write(`${cl[0][1]}` + `${menu[i][0]}${colors[15][1]}`.padEnd(25));
                        process.stdout.write(`${submenu[i2]}\n`);

                    } else {
                        process.stdout.write(`${menu[i][0] || ''}`.padEnd(21));
                        process.stdout.write(`${submenu[i2]}\n`);
                    }
                } else {
                    if (i2 == control.pos2) {
                        //item submenu for igual ao selecionado
                        if (i == control.pos1) {
                            //menu e submenu selecionados na mesma linha
                            process.stdout.write(`${cl[0][1]}` + `${menu[i]}${colors[15][1]}`.padEnd(25));
                            process.stdout.write(`${cl[0][2]}${submenu[i2]}${colors[15][1]}\n`);

                        } else {
                            process.stdout.write(`${menu[i] || ''}`.padEnd(21));
                            process.stdout.write(`${cl[0][2]}${submenu[i2]}${colors[15][1]}\n`);

                        }
                    } else if (i == control.pos1) {
                        //item selecionado no menu
                        process.stdout.write(`${cl[0][1]}` + `${menu[i]}${colors[15][1]}`.padEnd(25));
                        process.stdout.write(`${submenu[i2]}\n`);

                    } else {
                        process.stdout.write(`${menu[i] || ''}`.padEnd(21));
                        process.stdout.write(`${submenu[i2]}\n`);
                    }
                }
                i++;
            }
        }
        if (i < menu.length) {
            process.stdout.write(`${menu[i]}\n`);
        }
    }
}