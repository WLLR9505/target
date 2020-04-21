export declare class Controls {
    up: string;
    right: string;
    down: string;
    left: string;
    select: string;
    back: string;
    pos1: number;
    pos2: number;
    constructor(select?: string, back?: string, up?: string, right?: string, down?: string, left?: string);
    resetPos(): void;
}
