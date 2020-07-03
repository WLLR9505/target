import { Controls, menu, flexMenu } from '../index'
import * as RL from "readline-sync";

var control = new Controls();

let HorizontalMenu = [
    ['profile'],
    ['social', ['instagram', 'twitter', 'discord', 'steam']],
    ['following'],
    ['followed']
];


(function exampleFlexMenu() {
    let selected : any;
    while (control.pos1 >= 0) {
        selected = flexMenu(control, 'green', HorizontalMenu);
        
        switch (control.pos1) {
            case -1:
                break;
            case 0:
                test(selected);
                break;
            case 1:
                test(HorizontalMenu[control.pos1][1][control.pos2]);
                break;
            case 2:
                test(selected);
                break;
            case 3:
                test(selected);
                break;
        }
    }
})();
//----------------------------------------------------------

function test(txt : string) {
    console.log(txt);
    RL.keyIn();
}
