import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  text = 'home page';
  quoteText = 'this text is meant to be quoted';

  constructor() { }

  ngOnInit() {
  }

}
