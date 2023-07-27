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
    console.log('sending mail', this.myForm);
    // this.myForm.nativeElement.disable();
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    // animation  für senden anzeigen
    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('email', emailField.value);
    formData.append('message', messageField.value);
    await fetch('https://albert-wissigkeit.developerakademie.net/portfolio/send_mail.php',
      {
        method: 'POST',
        body: formData
      }
    );
    sendButton.style.backgroundColor = 'gray';
    setTimeout(() => {
      sendButton.style.backgroundColor = '';
      nameField.value = '';
      emailField.value = '';
      messageField.value = '';
      this.enableFormFields(nameField, emailField, messageField, sendButton);
    }, 5000);
  }

  enableFormFields(nameField: { disabled: boolean; }, emailField: { disabled: boolean; }, messageField: { disabled: boolean; }, sendButton: { disabled: boolean; }) {
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }
}
