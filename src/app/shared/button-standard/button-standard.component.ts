import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-button-standard',
    templateUrl: './button-standard.component.html',
    styleUrls: ['./button-standard.component.scss'],
})
export class ButtonStandardComponent implements OnInit {
    @Input() label: string;
    @Input() themeColor: string = 'green';
    constructor() {}

    ngOnInit() {}
}
