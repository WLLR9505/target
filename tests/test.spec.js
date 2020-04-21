var target = require('../dist/index');
var RL = require('readline-sync');

var control = new target.Controls();

var Example = [
    'item',
    'item',
    'item',
    'item',
    'item',
];
var sub = ['alterar', 'excluir'];

(function main() {
    while (control.pos1 >= 0) {
        control = target.menu(control, 'cyan', Example, sub);
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

function removeFromArray(arr , tgt) {
    return arr.filter((item, index) => {
        if(index != tgt) {
            return updateItem;
        }
    });
}

function updateItem(arr, index) {
    arr[index] = RL.question('updating:\n');
    return arr;
}
