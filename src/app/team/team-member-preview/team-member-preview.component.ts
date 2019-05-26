import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-team-member-preview',
    templateUrl: './team-member-preview.component.html',
    styleUrls: ['./team-member-preview.component.scss'],
})
export class TeamMemberPreviewComponent implements OnInit {
    @Input() memberInfo = {
        id: 'asfsagagwag',
        imgUrl: 'assets/images/martin.jpg'
    };
    constructor() {}

    ngOnInit() {}
}
