import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-textarea',
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent {
    @Input() label: string = '';
    public isOnFocus: boolean = false;

    private _value: string = '';

    public set value(v: string) {
        this._value = v;
    }

    public get value(): string {
        return this._value;
    }

    public onInputFocus() {
        this.isOnFocus = true;
    }

    public onInputBlur() {
        this.isOnFocus = false;
    }
}
