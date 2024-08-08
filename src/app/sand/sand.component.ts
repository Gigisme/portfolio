import {Component, ElementRef, HostListener, OnInit, signal, ViewChild} from '@angular/core';
import {Grid} from './grid';
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-sand',
    standalone: true,
    imports: [
        MatButtonToggleGroup,
        MatButtonToggle,
        ReactiveFormsModule
    ],
    templateUrl: './sand.component.html',
    styleUrl: './sand.component.css'
})
export class SandComponent implements OnInit{
    @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
    grid!: Grid;
    height: number = 600;
    width: number = 1200;
    cellSize: number = 10;
    context!: CanvasRenderingContext2D;
    isDrawing: boolean = false;
    mouseX: number = 0;
    mouseY: number = 0;
    activeParticles: Set<string> = new Set();
    cellSizeControl = new FormControl(10);

    ngOnInit(): void {
        this.grid = new Grid(this.width / this.cellSize, this.height / this.cellSize, 100, 48)
        const canvas = this.canvasRef.nativeElement;
        canvas.height = this.height;
        canvas.width = this.width;
        this.context = canvas.getContext('2d')!;

        this.cellSizeControl.valueChanges.subscribe(size => {
            if (size != null) {
                this.cellSize = size;
                this.clearCanvas();
                this.grid = new Grid(this.width / this.cellSize, this.height / this.cellSize, 100, 48)
            }
        })

        this.draw();
        this.startAnimation();
    }

    startAnimation() {
        requestAnimationFrame(() => {this.update()});
    }

    update(): void {
        if (this.isDrawing) {
            this.drawOnMouse()
        }
        this.updateSandFall();
        this.draw();
        setTimeout(() => {
            requestAnimationFrame(() => {this.update()});
        }, 10)
    }

    @HostListener('mouseleave', ['$event'])
    onMouseLeave() {
        this.isDrawing = false;
    }

    @HostListener('mousedown', ['$event'])
    onMouseDown(event: MouseEvent): void {
        if (this.mouseX >= 0 && this.mouseY >= 0 && this.mouseX < this.width && this.mouseY < this.height) {
            if (event.button === 0) {
                this.isDrawing = true;
            } else if (event.button === 2) {
                this.clearCanvas()
            }
        }
    }

    @HostListener('contextmenu', ['$event'])
    onContextMenu(event: MouseEvent): void {
        event.preventDefault();
    }

    @HostListener('mouseup', ['$event'])
    onMouseUp(): void {
        this.isDrawing = false;
    }

    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent): void {
            const canvas = this.canvasRef.nativeElement;
            const rect = canvas.getBoundingClientRect();
            const x = Math.floor((event.clientX - rect.left)/ this.cellSize);
            const y = Math.floor((event.clientY - rect.top)/ this.cellSize);
            this.mouseX = x;
            this.mouseY = y;
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
        this.grid.clear();
        this.activeParticles.clear();
    }

    drawOnMouse(): void {
        if (!this.grid.isEmpty(this.mouseX,this.mouseY)) {
            return;
        }
        const x = this.mouseX;
        const y = this.mouseY;
        const hue = Math.round(Math.random() * 360);
        this.grid.setCell(x, y,hue);
        this.activeParticles.add(`${x},${y}`)
    }

    updateSandFall(): void {
        const newActiveParticles = new Set<string>();

        for (const pos of this.activeParticles) {
            const [x, y] = pos.split(',').map(Number);
                if (y === this.height / this.cellSize - 1) {

                    continue;
                }
                let settled = true;
                let direction = 0;
                //Falling
                if (this.grid.isEmpty(x, y + 1)) {
                    settled = false;
                }
                //Settling
                else if (this.grid.isEmpty(x - 1, y + 1) && this.grid.isEmpty(x + 1, y + 1)) {
                    settled = false;
                    direction = Math.floor(Math.random() * 2);
                }
                else if (this.grid.isEmpty(x - 1, y + 1)) {
                    settled = false;
                    direction = -1;
                }
                else if (this.grid.isEmpty(x + 1, y + 1)) {
                    settled = false;
                    direction = 1;
                }
                if (!settled) {
                    const hue: string = this.grid.grid[y][x];
                    this.grid.clearCell(x, y);
                    this.grid.setCell(x + direction, y + 1, hue);
                    newActiveParticles.add(`${x + direction},${y + 1}`);
                }
            this.activeParticles = newActiveParticles;
        }
    }

    draw() {
        for (let y = 0; y < this.height / this.cellSize; y++) {
            for (let x = 0; x < this.width /this.cellSize; x++) {
                this.context.fillStyle = this.grid.grid[y][x];
                this.context.fillRect(x * this.cellSize,y * this.cellSize,this.cellSize,this.cellSize);
                //this.context.strokeRect(x * this.cellSize, y * this.cellSize, this.cellSize,this.cellSize);//border
            }
        }
    }

    protected readonly signal = signal;
}
