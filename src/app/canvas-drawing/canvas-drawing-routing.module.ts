import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';

const canvasRoutingRoutes: Routes = [{ path: '', component: BoardComponent }];

@NgModule({
    imports: [RouterModule.forChild(canvasRoutingRoutes)],
    exports: [RouterModule],
})
export class CanvasDrawingRoutingModule {}
