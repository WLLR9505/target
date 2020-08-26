"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var RL = require("readline-sync");
var control = new index_1.Controls();
var HorizontalMenu = [
    ['profile'],
    ['social', ['instagram', 'twitter', 'discord', 'steam']],
    ['following'],
    ['followed']
];
(function exampleFlexMenu() {
    var selected;
    while (control.pos1 >= 0) {
        selected = index_1.flexMenu(control, 'green', HorizontalMenu, 'v');
        switch (control.pos1) {
            case -1:
                break;
            case 0:
                print(selected);
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
function print(txt) {
    console.log(txt);
    RL.keyIn();
}
//# sourceMappingURL=flexMenuTest.spec.js.map