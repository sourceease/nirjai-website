import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nj-header',
  templateUrl: './nj-header.component.html',
  styleUrls: ['./nj-header.component.scss']
})
export class NjHeaderComponent implements OnInit {

  @Input() scrollThreshold2: boolean | undefined;
  hmbrOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  openHmbg() {
    this.hmbrOpen = !this.hmbrOpen;
  }

}
