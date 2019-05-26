import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../team.types';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
    public teamMembers: TeamMember[] = [
        {
            id: '1',
            imgUrl: 'assets/images/martin.jpg',
            firstName: 'Martin',
            lastName: 'Georgiev',
            profession: 'Front End Developer',
            linkedIn: 'https://www.linkedin.com/in/martin-georgiev-797319b9/',
        },
        {
            id: '2',
            imgUrl: 'assets/images/sasho.jpg',
            firstName: 'Alexander',
            lastName: 'Kolarov',
            profession: 'JavaScript Developer',
            linkedIn: 'https://www.linkedin.com/in/martin-georgiev-797319b9/',
        },
    ];
    constructor() {}

    ngOnInit() {}
}
