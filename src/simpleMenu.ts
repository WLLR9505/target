import * as RL from "readline-sync";
import { background, color } from "./colors";
import { Controls } from "./controls";

var input = '';

export function menu(menuList : string[ ], control : Controls) {
    var posSeletor = 0;
    const nItens = menuList.length;

    function AtualizaMenu() {
        for (var i2 = 0; i2 < nItens; i2++) {
            if (posSeletor == i2) {
                console.log(`${color.cor_ciano} ${menuList[i2]} ${color.cor_reset}`); //marca posição do seletor
            } else {
                console.log(`${menuList[i2]}`);
            }
        }
        console.log("\n");
    }

    function ShowMenu() {
        if (input == control.up)
            posSeletor--;
        else if (input == control.down)
            posSeletor++;

        if (posSeletor == nItens) ///Seletor no fim e avança
            posSeletor = 0; //Igual ao primeiro item do menu
        else if (posSeletor < 0) //seletor no começo e volta
            posSeletor = nItens - 1; //Igual ao ultimo item do menu

        console.clear();
        AtualizaMenu();

    }

    do {
        ShowMenu();
        input = RL.keyIn('', {
            hideEchoBack: true,
            mask: ''
        });
        if(input == control.back) {
            return -1;
        }
    } while (input != control.select)

    return posSeletor;
}