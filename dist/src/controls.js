"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controls = (function () {
    function Controls(up, right, down, left, select, back) {
        this.up = up || 'w',
            this.right = right || 'd',
            this.down = down || 's',
            this.left = left || 'a',
            this.select = select || 'e',
            this.back = back || 'q',
            this.pos1 = 0,
            this.pos2 = 0;
    }
    Controls.prototype.resetPos = function () {
        this.pos1 = 0;
        this.pos2 = 0;
    };
    return Controls;
}());
exports.Controls = Controls;
//# sourceMappingURL=controls.js.map