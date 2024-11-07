import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nj-header',
  templateUrl: './nj-header.component.html',
  styleUrls: ['./nj-header.component.scss']
})
export class NjHeaderComponent implements OnInit {

  @Input() scrollThreshold2: boolean | undefined;
  hmbrOpen: boolean = false;
  isDropdownOpen = false;
  selectedLink: string = '';
  logoSrc: string = '../../../../../../../../assets/nirjai/home/logo.png'; 

  constructor(private router: Router) { }

  ngOnInit(): void { }
  openHmbg() {
    this.hmbrOpen = !this.hmbrOpen;
    console.log(this.hmbrOpen)
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  navigateToSection(sectionId: string) {
    this.router.navigate(['/'], { fragment: sectionId });
  }
  selectLink(link: string) {
    this.selectedLink = link;
        if (link === 'IT-Training-Program' || link === 'Aarambh-Program') {
      this.logoSrc = '../../../../../../../../assets/nirjai/home/logo2.png'; 
      this.router.navigate([`/${link}`]);
    } else {
      this.logoSrc = '../../../../../../../../assets/nirjai/home/logo.png'; 
      this.navigateToSection(link);
    }
  
    this.isDropdownOpen = false;
  }
  
}
