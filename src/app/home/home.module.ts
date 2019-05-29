import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { InputDefaultModule } from '../shared/input-default/input-default.module';

@NgModule({
    imports: [CommonModule, HomeRoutingModule, InputDefaultModule],
    declarations: [HomeComponent],
})
export class HomeModule {}
