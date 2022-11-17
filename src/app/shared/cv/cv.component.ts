import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { VCardFormatter, VCard } from "ngx-vcard";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() profile: string = '';
  @Input() title: string = '';
  @Input() phoneNumber: string = '';
  @Input() linkedin: string = '';
  @Input() facebook: string = '';
  @Input() email: string = '';

  public emailLink: string = "";
  public vContact: VCard = {};
  public base64Image: string = '';
  public vContactString: string = '';


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // Create the email link 
    this.emailLink = `mailto:${this.email}+?subject=Contact`
    this.getBase64Profile();
  }


  private generateVCard() {
    /*
    The PHOTO part of the VCARD should have the following format:
    PHOTO;ENCODING=b;TYPE=JPEG:iVBORw0KGgoAAAA ... bnwwAAAABJRU5ErkJggg==
    instead of the current PHOTO:base64... 
    see https://www.nellipalooza.com/blog/2020/3/1/vcf-files-for-sharing-contact-information
*/
    // Create the virtual contact for download 
    this.vContact = {
      name: {
        firstNames: this.firstName,
        lastNames: this.lastName,
      },
      email: [this.email],
      telephone: [this.phoneNumber],
      title: this.title,
      organization: 'Homie SARL-S',
      url: 'www.homie.lu',
      photo: 'ENCODING=b;TYPE=image/jpeg:' + this.base64Image
    }

    // Generate the contactString 
    // And somehow we need to replace the PHOTO: with PHOTO;
    this.vContactString = VCardFormatter.getVCardAsString(this.vContact).replace('PHOTO:', 'PHOTO;')
  }

  // Converts an image to a base64 blob 
  private getBase64Profile() {
    this.http.get('/assets/' + this.profile, { responseType: 'blob' })
      .subscribe(res => {
        const reader = new FileReader();
        reader.onloadend = () => {
          var base64data = reader.result;
          this.base64Image = ('' + base64data).split('data:image/jpeg;base64,')[1];
          // Generate the VCard only after this 
          this.generateVCard();

        }

        reader.readAsDataURL(res);
      })
  }

  public downloadVCard() {
    var hiddenElement = document.createElement('a');

    hiddenElement.download = 'contact';
    var blob = new Blob([this.vContactString], {
      type: 'text/x-vcard'
    });
    hiddenElement.href = window.URL.createObjectURL(blob);
    hiddenElement.click();

  }



}
