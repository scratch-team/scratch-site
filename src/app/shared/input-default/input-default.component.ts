import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-input-default',
    templateUrl: './input-default.component.html',
    styleUrls: ['./input-default.component.scss'],
})
export class InputDefaultComponent implements OnInit {
    public isOnFocus: boolean = false;
    public randomInputId: string;
    private _value: string = '';

    public set value(v: string) {
        this._value = v;
    }

    public get value(): string {
        return this._value;
    }

    @Input() label: string = '';

    ngOnInit(): void {
        this.randomInputId = 'input' + Math.random();
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }

    public onInputFocus() {
        this.isOnFocus = true;
    }

    public onInputBlur() {
        this.isOnFocus = false;
    }
}
