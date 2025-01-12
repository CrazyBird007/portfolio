import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;


  async sendMail() {
    const { nameField, emailField, messageField, sendButton } = this.getData();
    this.disableForm(nameField, emailField, messageField, sendButton);
    let formData = new FormData();
    this.getFormData(formData, nameField, emailField, messageField);
    await fetch('https://albert-wissigkeit.de/portfolio/send_mail.php',
      {
        method: 'POST',
        body: formData
      }
    );
    setTimeout(() => {
      this.clearForm(nameField, emailField, messageField, sendButton);
      this.enableFormFields(nameField, emailField, messageField, sendButton);
    }, 5000);
  }


  getData() {
    return {
      nameField: this.nameField.nativeElement,
      emailField: this.emailField.nativeElement,
      messageField: this.messageField.nativeElement,
      sendButton: this.sendButton.nativeElement,
    };
  }


  clearForm(nameField: { value: string; }, emailField: { value: string; }, messageField: { value: string; }, sendButton: { style: { backgroundColor: string; }; }) {
    sendButton.style.backgroundColor = '';
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
  }


  getFormData(formData: FormData, nameField: { value: any; }, emailField: { value: any; }, messageField: { value: any; }) {
    formData.append('name', nameField.value);
    formData.append('email', emailField.value);
    formData.append('message', messageField.value);
  }


  disableForm(nameField: { disabled: boolean; }, emailField: { disabled: boolean; }, messageField: { disabled: boolean; }, sendButton: {
    style: any; disabled: boolean;
  }) {
    sendButton.style.backgroundColor = 'gray';
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
  }


  enableFormFields(nameField: { disabled: boolean; }, emailField: { disabled: boolean; }, messageField: { disabled: boolean; }, sendButton: { disabled: boolean; }) {
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }
}
