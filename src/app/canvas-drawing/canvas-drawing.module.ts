import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasDrawingRoutingModule } from './canvas-drawing-routing.module';
import { BoardComponent } from './board/board.component';
import { CanvasDrawerService } from './canvas-drawer.service';

@NgModule({
    declarations: [BoardComponent],
    imports: [CommonModule, CanvasDrawingRoutingModule],
    providers: [CanvasDrawerService],
})
export class CanvasDrawingModule {}
