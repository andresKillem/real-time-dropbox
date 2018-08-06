import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private title: string;
  private viewProjectBtnText: string;

  constructor() {
    this.title = 'Projects';
    this.viewProjectBtnText = 'View Project';
   }

  ngOnInit() {
  }

}
