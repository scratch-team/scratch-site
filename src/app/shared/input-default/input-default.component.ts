import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputDefaultComponent),
    multi: true,
};
@Component({
    selector: 'app-input-default',
    templateUrl: './input-default.component.html',
    styleUrls: ['./input-default.component.scss'],
    providers: [VALUE_ACCESSOR],
})
export class InputDefaultComponent implements OnInit, ControlValueAccessor {
    public isOnFocus: boolean = false;
    public randomInputId: string;
    private _value: string = '';

    onChange: any;
    onTouch: any;

    public set value(v: string) {
        this._value = v;
        this.onChange(v);
        this.onTouch();
    }

    public get value(): string {
        return this._value;
    }

    @Input() label: string = '';

    ngOnInit(): void {
        this.randomInputId = 'input' + Math.random();
    }

    public onInputFocus() {
        this.isOnFocus = true;
    }

    public onInputBlur() {
        this.isOnFocus = false;
        this.onTouch();
    }

    writeValue(obj: any): void {
        if (obj) {
            this.value = obj;
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }
}
