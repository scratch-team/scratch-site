import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CanvasDrawerService {
    constructor() {}

    public createBoard(id: string): void {
        const canvas: any = document.getElementById(id);
        if (canvas && canvas.getContext) {
            const ctx = canvas.getContext('2d');

            ctx.fillStyle = '#D74022';
            ctx.fillRect(25, 25, 150, 150);

            ctx.fillStyle = 'rgba(0,0,0,0.5)';
            ctx.clearRect(60, 60, 120, 120);
            ctx.strokeRect(90, 90, 80, 80);
        }
    }
}
