import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { InputDefaultModule } from '../shared/input-default/input-default.module';
import { TextareaModule } from '../shared/textarea/textarea.module';
import { SeparatorModule } from '../shared/separator/separator.module';

@NgModule({
    imports: [CommonModule, ContactRoutingModule, InputDefaultModule, TextareaModule, SeparatorModule],
    declarations: [ContactComponent],
})
export class ContactModule {}
