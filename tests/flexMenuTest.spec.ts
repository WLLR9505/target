import { Controls, menu, flexMenu } from '../index'
import * as RL from "readline-sync";

var control = new Controls();

let HorizontalMenu = [
    ['profile', ['settings', 'sign out']],
    ['social', ['instagram', 'discord', 'steam']],
    ['following'],
    ['followed']
];

(function exampleFlexMenu() {
    let selected : any;
    while (control.pos1 >= 0) {
        selected = flexMenu(control, 'green', HorizontalMenu, 'h');

        switch (control.pos1) {
            case -1:
                break;
            case 0:
                print(HorizontalMenu[control.pos1][1][control.pos2]);
                break;
            case 1:
                print(HorizontalMenu[control.pos1][1][control.pos2]);
                break;
            case 2:
                print(selected[0]);
                break;
            case 3:
                print(selected);
                break;
        }
    }
})();
//----------------------------------------------------------

function print(txt : string) {
    console.log(txt);
    RL.keyIn();
}
