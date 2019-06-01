import { Component } from '@angular/core';
import { TeamMember } from 'src/app/shared/member-preview/member-preview.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
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
        {
            id: '3',
            imgUrl: 'assets/images/sasho-bor.jpg',
            firstName: 'Alexander',
            lastName: 'Yordanov',
            profession: 'SQL Master',
            linkedIn: 'https://www.linkedin.com/in/alexander-yordanov-69948a8b/',
        },
        {
            id: '4',
            imgUrl: 'assets/images/mirela.jpg',
            firstName: 'Mirela',
            lastName: 'Cvetkova',
            profession: 'Manual Quality Assurance',
            linkedIn: 'https://www.linkedin.com/in/mirela-cvetkova-287895177/',
        },
    ];
}
