export class Controls {
    up: string;
    right: string;
    down: string;
    left: string;
    select: string;
    back: string;

    pos1: number;
    pos2: number;

    constructor(select?: string, back?: string, up?: string, down?: string, right?: string, left?: string) {
        this.select = select || 'e',
        this.back = back || 'q',
        this.up = up || 'w',
        this.down = down || 's',
        this.right = right || 'd',
        this.left = left || 'a',
        this.pos1 = 0,
        this.pos2 = 0
    }

    resetPos() {
        this.pos1 = 0;
        this.pos2 = 0;
    }
}