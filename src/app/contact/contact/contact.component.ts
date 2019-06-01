import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
    public contactForm: FormGroup;
    private buttonClicked: boolean;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            phoneNumber: ['', Validators.required],
            projectDescription: ['', Validators.required],
        });
    }

    public get name() {
        return this.contactForm.get('name');
    }
    public get email() {
        return this.contactForm.get('email');
    }
    public get phoneNumber() {
        return this.contactForm.get('phoneNumber');
    }
    public get projectDescription() {
        return this.contactForm.get('projectDescription');
    }

    public submitForm() {
        this.buttonClicked = true;
        if (this.contactForm.valid && !this.buttonClicked) {
            this.buttonClicked = false;
        } else {
            this.buttonClicked = false;
        }
    }
}
