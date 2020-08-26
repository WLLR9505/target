import * as RL from "readline-sync";
import { Controls } from "./controls";
import { updateMenuV } from "./updateMenu/Vmenu";
import { updatesubMenuV } from "./updateMenu/VsubMenu";
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


export function menu(control: Controls, color: string, menu: string[], submenu?: string[]) : Controls {

    control.resetPos();

    var cl = colors.filter(e => e[0] == color);

    //----------------------

    function subMenu(submenu : any) {
        updatesubMenuV(menu, submenu, control, cl);
        
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
            updatesubMenuV(menu, submenu, control, cl);
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

    updateMenuV(menu, control, cl);

    function showMenu() {
        if (input == control.up)
            control.pos1--;
        else if (input == control.down)
            control.pos1++;

        if (control.pos1 == menu.length) ///Seletor no fim e avança
            control.pos1 = 0; //Igual ao primeiro item do menu
        else if (control.pos1 < 0) //seletor no começo e volta
            control.pos1 = menu.length - 1; //Igual ao ultimo item do menu

        console.clear();
        updateMenuV(menu, control, cl);
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

    if (submenu) {
        subMenu(submenu);
    }
    return control;
}