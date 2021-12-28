import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { Contact } from '../models/contact.model';

export interface Contact {
  name: string;
  phone: string;
  email: string;
  country: string;
}

@Component({
  selector: 'kevit-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {
  @Input() sendData: any;
  @Input() dataIndex:any;
  @Output() notify:EventEmitter<Contact> = new EventEmitter<Contact>();
  contactFormData!: Contact;
  contactForm: FormGroup;
  toSaveData: any = [];

  constructor() {
    this.contactForm = new FormGroup({
      // id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    console.log('senddata', this.sendData);
    console.log('dataIndex', this.dataIndex);
  }

  getformControl(formControl: any) {
    return this.contactForm.get(formControl) as FormArray;
  }

  // addContact() {
  //   if (!this.contactForm.valid) {
  //     this.contactForm.markAllAsTouched();
  //     return;
  //   }
  //   this.contactFormData = this.contactForm.value as Contact
  //   let contactData = { ...this.contactForm.value }
  //   if (localStorage.getItem('contactData') === null) {
  //     this.toSaveData.push(contactData);
  //     localStorage.setItem('contactData', JSON.stringify(this.toSaveData));
  //   } else {
  //     let getNewContactData = JSON.parse(localStorage.getItem('contactData') || '[]');
  //     getNewContactData.push(contactData);
  //     localStorage.setItem('contactData', JSON.stringify(getNewContactData));
  //   }
  //   this.activeModal.dismiss('submitData');
  // }

  triggerme() {
    this.notify.emit(this.contactForm.value as Contact);
  }

}
