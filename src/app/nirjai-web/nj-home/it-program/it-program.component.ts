import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-it-program',
  templateUrl: './it-program.component.html',
  styleUrls: ['./it-program.component.scss']
})
export class ItProgramComponent implements OnInit {

  constructor() { }
  formData = {
    fullName: '',
    email: '',
    phone: '',
    interest: '',
  }
  sendEmail() {
    const subject = 'Thank You for Your Interest in Our IT Training Program!';
    const body = `
      Dear ${this.formData.fullName},

      Thank you for visiting Nirjai Technologies and exploring our IT training program. We’re thrilled to see your interest in advancing your skills and are dedicated to supporting your journey toward a successful career in IT.

      To help us better understand your goals, please complete the form available on our website, which includes:
      Your area of interest: ${this.formData.interest}
      Full name: ${this.formData.fullName}
      Phone number: ${this.formData.phone}
      Email ID: ${this.formData.email}

      Once submitted, our team will review your information and reach out with further details regarding program phases, schedules, and next steps. We aim to ensure you have all the information needed to make a confident decision about joining our program.

      If you have any immediate questions, please feel free to reply to this email or contact us directly at [contact number].

      Best Regards,
      Nirjai Technologies
    `;

    const mailtoLink = `mailto:${this.formData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }
  ngOnInit(): void {
  }

}
