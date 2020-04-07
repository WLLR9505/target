export class Controls {
    up: string;
    right: string;
    down: string;
    left: string;
    select: string;
    back: string;

    constructor(up?: string, right?: string, down?: string, left?: string, select?: string, back?: string) {
        this.up = up || 'w',
        this.right = right || 'd',
        this.down = down || 's',
        this. left = left || 'a',
        this.select = select || 'e',
        this.back = back || 'q'
    }
}