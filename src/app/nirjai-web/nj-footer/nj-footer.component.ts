import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-nj-footer',
  templateUrl: './nj-footer.component.html',
  styleUrls: ['./nj-footer.component.scss']
})
export class NjFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openEmail() {

    const mailtoLink = `mailto:info@nirjai.com`;    
    window.location.href = mailtoLink;
  }
  // navigateToSection(sectionId: string) {
  //   this.router.navigate(['/'], { fragment: sectionId });
  // }

}
