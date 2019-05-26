import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { TeamRoutingModule } from './team-routing.module';
import { TeamMemberPreviewComponent } from './team-member-preview/team-member-preview.component';

@NgModule({
    imports: [CommonModule, TeamRoutingModule],
    declarations: [TeamComponent, TeamMemberPreviewComponent],
})
export class TeamModule {}
