"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controls = (function () {
    function Controls(select, back, up, down, right, left) {
        this.select = select || 'e',
            this.back = back || 'q',
            this.up = up || 'w',
            this.down = down || 's',
            this.right = right || 'd',
            this.left = left || 'a',
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