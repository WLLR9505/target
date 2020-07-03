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
        selected = index_1.flexMenu(control, 'green', HorizontalMenu);
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
function test(txt) {
    console.log(txt);
    RL.keyIn();
}
//# sourceMappingURL=flexMenuTest.spec.js.map