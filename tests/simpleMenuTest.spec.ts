import { Controls, menu } from '../index'
import * as RL from "readline-sync";

var control = new Controls();

var Example = [
    'item',
    'item',
    'item',
    'item',
    'item',
];
var sub = ['alterar', 'excluir'];

(async function main() {
    while (control.pos1 >= 0) {
        menu(control, 'cyan', Example, sub);
        if (control.pos1 == -1) {
            console.clear();
            return 0;
        }

        if (control.pos2 == 0) {
            Example = updateItem(Example, control.pos1);
        } else if (control.pos2 == 1) {
            Example = removeFromArray(Example, control.pos1);
        }
    }
}) ();

//----------------------------------------------------------

function removeFromArray(arr : any[] , tgt : number) {
    return arr.filter((item, index) => {
        if(index != tgt) {
            return updateItem;
        }
    });
}

function updateItem(arr : any[], index : number) {
    arr[index] = RL.question('updating:\n');
    return arr;
}
