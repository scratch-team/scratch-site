import { CanvasDrawerService } from './../canvas-drawer.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
    public canvasId: string = 'display-port';
    constructor(private canvasDrawerService: CanvasDrawerService) {}

    ngOnInit() {
        this.canvasDrawerService.createBoard(this.canvasId);
    }
}
