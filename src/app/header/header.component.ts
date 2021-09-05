import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
imageUrl : string = "assets/img/send.png"
  constructor() { }

  ngOnInit(): void {
  }

}
