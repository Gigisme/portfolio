export class Grid {
    grid: string[][];
    width: number;
    height: number;
    saturation: number;
    lightness: number;

    constructor(width: number, height: number, saturation: number, lightness: number) {
        this.width = width;
        this.height = height;
        this.saturation = saturation;
        this.lightness = lightness;
        this.grid = Array.from({ length: height }, () => Array(width).fill('hsl(0,0%,0%)'));
    }

    setCell(x:number,y:number,hue:number | string) {
        if (typeof hue === 'number') {
            this.grid[y][x] = `hsl(${hue}, ${this.saturation}%, ${this.lightness}%)`;
        } else {
            this.grid[y][x] = hue;
        }
    }

    clearCell(x:number,y:number) {
        this.grid[y][x] = 'hsl(0,0%,0%)';
    }

    clear() {
        this.grid = Array.from({ length: this.height }, () => Array(this.width).fill('hsl(0,0%,0%)'));
    }

    isEmpty(x: number, y:number): boolean {
        return this.grid[y][x] == 'hsl(0,0%,0%)';
    }
}
