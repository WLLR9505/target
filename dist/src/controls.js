"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controls = (function () {
    function Controls(select, back, up, right, down, left) {
        this.up = up || 'w',
            this.right = right || 'd',
            this.down = down || 's',
            this.left = left || 'a',
            this.select = select || 'e',
            this.back = back || 'q',
            this.pos1 = 0,
            this.pos2 = -1;
    }
    Controls.prototype.resetPos = function () {
        this.pos1 = 0;
        this.pos2 = -1;
    };
    return Controls;
}());
exports.Controls = Controls;
//# sourceMappingURL=controls.js.map