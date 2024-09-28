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

  constructor(private router: Router) { }

  ngOnInit(): void { }
  openHmbg() {
    this.hmbrOpen = !this.hmbrOpen;
    console.log(this.hmbrOpen)
  }

  navigateToSection(sectionId: string) {
    this.router.navigate(['/'], { fragment: sectionId });
  }

}
