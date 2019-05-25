import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [PageNotFoundComponent, HeaderComponent],
  imports: [CommonModule, RouterModule ],
  exports: [PageNotFoundComponent, HeaderComponent]
})
export class CoreModule {}
