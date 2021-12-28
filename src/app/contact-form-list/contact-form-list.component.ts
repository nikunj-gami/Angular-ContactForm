import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-form-list',
  templateUrl: './contact-form-list.component.html',
  styleUrls: ['./contact-form-list.component.scss']
})
export class ContactFormListComponent implements OnInit {
  contactFormData: any = [];
  childData: any;
  dataIndex: any;
  @Output() sendFormData:EventEmitter<any> = new EventEmitter<any>();
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    // this.loadData();
  }

  contactFormMethod(event: any) {
    this.childData = event;
    // this.dataIndex = ind;
    console.log(this.childData);
  }

  trigger(ind:any) {
    console.log(ind);
    this.sendFormData.emit(this.childData);
  }


  // loadData() {
  //   this.contactFormData = JSON.parse(localStorage.getItem('contactData') || '[]');
  //   console.log(this.contactFormData);
  // }


  // modalProps() {
  //   const props: NgbModalOptions = {
  //     ariaLabelledBy: 'modal-basic-title',
  //     windowClass: 'modal-rounded',
  //     size: 'md',
  //     backdrop: 'static',
  //     keyboard: true,
  //     centered: true
  //   };
  //   return props;
  // }

  // openContactFormModel() {
  //   this.modalService.open(ContactFormComponent, this.modalProps()).result.then((result) => {
  //   }, (reason: any) => {
  //     console.log(reason);
  //     if (reason === 'submitData') {
  //       this.loadData();
  //     }
  //   });
  // }
}
