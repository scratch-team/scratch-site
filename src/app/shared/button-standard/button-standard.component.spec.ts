import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonStandardComponent } from './button-standard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ButtonStandardComponent', () => {
    let component: ButtonStandardComponent;
    let fixture: ComponentFixture<ButtonStandardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ButtonStandardComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonStandardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
