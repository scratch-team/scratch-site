import { Component, OnInit, Input } from '@angular/core';
import { TeamMember } from '../team.types';

@Component({
    selector: 'app-team-member-preview',
    templateUrl: './team-member-preview.component.html',
    styleUrls: ['./team-member-preview.component.scss'],
})
export class TeamMemberPreviewComponent implements OnInit {
    @Input() memberInfo: TeamMember;
    constructor() {}

    ngOnInit() {}
}
