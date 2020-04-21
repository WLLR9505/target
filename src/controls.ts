export class Controls {
    up: string;
    right: string;
    down: string;
    left: string;
    select: string;
    back: string;

    pos1: number;
    pos2: number;

    constructor(select?: string, back?: string, up?: string, right?: string, down?: string, left?: string) {
        this.up = up || 'w',
        this.right = right || 'd',
        this.down = down || 's',
        this. left = left || 'a',
        this.select = select || 'e',
        this.back = back || 'q',
        this.pos1 = 0,
        this.pos2 = -1
    }

    resetPos() {
        this.pos1 = 0;
        this.pos2 = -1;
    }
}