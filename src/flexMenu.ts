import * as RL from "readline-sync";
import { Controls } from "./controls";
var input = '';

var colors: [string, string, string][];

colors = [
    ['gray', '\x1b[01;40m','\x1b[01;40m'],
    ['red', '\x1b[01;41m','\x1b[01;31m'],
    ['green', '\x1b[01;42m','\x1b[01;32m'],
    ['yellow', '\x1b[01;43m','\x1b[01;33m'],
    ['blue', '\x1b[01;44m','\x1b[01;34m'],
    ['magenta', '\x1b[01;45m','\x1b[01;35m'],
    ['cyan', '\x1b[01;46m','\x1b[01;36m'],
    ['black', '\x1b[22;40m','\x1b[22;30m'],
    ['white', '\x1b[01;47m','\x1b[01;37m'],
    ['darkred', '\x1b[22;41m','\x1b[22;31m'],
    ['darkgreen', '\x1b[22;42m','\x1b[22;32m'],
    ['darkyellow', '\x1b[22;43m','\x1b[22;33m'],
    ['darkblue', '\x1b[22;44m','\x1b[22;34m'],
    ['darkmagenta', '\x1b[22;45m','\x1b[22;35m'],
    ['darkcyan', '\x1b[22;46m','\x1b[22;36m'],
    ['reset', '\x1b[0m' ,'\x1b[0m']
];

export function flexMenu(control: Controls, color: string, menu: any) : any {
    control.resetPos();

    var cl = colors.filter(e => e[0] == color);

    function subMenu(menu: [string, string[]][], submenu: string[]) {

        function updateSubmenu() {
            updateMenu();
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

    function updateMenu() {
        for (let i2 = 0; i2 < menu.length; i2++) {
            if (control.pos1 == i2) {
                process.stdout.write(`${cl[0][2]}${menu[i2][0]}   ${colors[15][1]}`);//marca posição do seletor
            } else {
                process.stdout.write(`${menu[i2][0]}   `);
            }
        }
        process.stdout.write('\n');
    }

    function showMenu() {
        if (input == control.left)
            control.pos1--;
        else if (input == control.right)
            control.pos1++;

        if (control.pos1 == menu.length) ///Seletor no fim e avança
            control.pos1 = 0; //Igual ao primeiro item do menu
        else if (control.pos1 < 0) //seletor no começo e volta
            control.pos1 = menu.length - 1; //Igual ao ultimo item do menu

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
    } while (input != control.select)

    if (!menu[control.pos1][1])
        return menu[control.pos1];

    subMenu(menu, menu[control.pos1][1]);
}