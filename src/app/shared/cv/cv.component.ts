import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { VCard } from 'ngx-vcard';

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
  @Input() birthday: Date | undefined;

  public emailLink: string = "";
  public vContact: VCard = {};
  public base64Image: string = '';
  public contactGenerated: boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // Create the email link 
    this.emailLink = `mailto:${this.email}+?subject=Contact`
    this.getBase64Profile();
  }


  private generateVCard() {

    // Create the virtual contact for download 
    this.vContact = {
      name: {
        firstNames: this.firstName,
        lastNames: this.lastName,
      },
      birthday: this.birthday,
      email: [this.email],
      telephone: [this.phoneNumber],
      title: this.title,
      organization: 'Homie SARL-S',
      url: 'www.homie.lu',
      photo: this.base64Image
    }

    // And set the boolean to true 
    this.contactGenerated = true;
  }

  // Converts an image to a base64 blob 
  private getBase64Profile() {
    this.http.get('/assets/' + this.profile, { responseType: 'blob' })
      .subscribe(res => {
        const reader = new FileReader();
        reader.onloadend = () => {
          var base64data = reader.result;
          this.base64Image = '' + base64data;
        }

        reader.readAsDataURL(res);
      }).add(() => {
        // Generate the VCard only after this 
        this.generateVCard();
      });
  }



}
