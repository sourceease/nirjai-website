import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nj-footer',
  templateUrl: './nj-footer.component.html',
  styleUrls: ['./nj-footer.component.scss']
})
export class NjFooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  // navigateToSection(sectionId: string) {
  //   this.router.navigate(['/'], { fragment: sectionId });
  // }

}
