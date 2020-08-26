import * as RL from "readline-sync";
import { Controls } from "./controls";
import { updateMenuH } from './updateMenu/Hmenu'
import { updateMenuV } from "./updateMenu/Vmenu";
import { updatesubMenuV } from "./updateMenu/VsubMenu";
import colors = require("./colors");
var input = '';


export function flexMenu(control: Controls, color: string, menu: any, mode: string) : any {

    var cl = colors.filter(e => e[0] == color);

    function subMenu(menu: [string, string[]][], submenu: string[]) {

        function updateSubmenu() {
            if (mode === 'h' || mode === 'H') {
                updateMenuH(menu, control, cl);
                let spaces = 0;
                for (let i = 0; i <= control.pos1; i++) {
                    spaces += menu[i][0].length + 2;
                }
                process.stdout.write('\n');
                for (let i = 0; i < submenu.length; i++) {
                    if (control.pos2 == i) {
                        process.stdout.write(`${cl[0][2]}${submenu[i]}${colors[15][1]}\n`.padStart(spaces + 12));//marca posição do seletor
                    } else {
                        process.stdout.write(`${submenu[i]}\n`.padStart(spaces));
                    }
                }
                process.stdout.write(`\n\n`);
            } else {
                updatesubMenuV(menu, submenu, control, cl);
            }
        }

        function showMenu() {
            if (input == control.up)
                control.pos2--;
            else if (input == control.down)
                control.pos2++;

            if (control.pos2 == submenu.length) ///Seletor no fim e avança
                control.pos2 = 0; //Igual ao primeiro item do menu
            else if (control.pos2 < 0) //seletor no começo e volta
                control.pos2 = submenu.length - 1; //Igual ao ultimo item do menu

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
        } while (input != control.select)

        return control;
    }

    //----------------------

    let c = colors.filter(e => e[0] == color);

    mode == 'h' ? updateMenuH(menu, control, cl) : updateMenuV(menu, control, cl);

    function showMenu() {
        if (input == control.left || input == control.up)
            control.pos1--;
        else if (input == control.right || input == control.down)
            control.pos1++;

        if (control.pos1 == menu.length) ///Seletor no fim e avança
            control.pos1 = 0; //Igual ao primeiro item do menu
        else if (control.pos1 < 0) //seletor no começo e volta
            control.pos1 = menu.length - 1; //Igual ao ultimo item do menu

        console.clear();
        mode == 'h' ? updateMenuH(menu, control, cl) : updateMenuV(menu, control, cl);

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
    } while (input != control.select)

    if (!menu[control.pos1][1])
        return menu[control.pos1];

    subMenu(menu, menu[control.pos1][1]);
}