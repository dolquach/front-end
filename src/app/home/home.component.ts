import { Component, OnInit } from '@angular/core';
import { Producthot } from '../interface/producthot';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public imageUrl : string = "assets/img/one.jpg";
public imageUrl1 : string = "assets/img/two.jpg";
public imageUrl2 : string = "assets/img/three.jpg";
public producthots : Producthot[] = 
[ 
  { url: "assets/img/send.png", name: "Bánh tráng, bánh phồng"},
  { url: "assets/img/send.png", name: "nhận"},
  { url: "assets/img/send.png", name: "xóa"},
  { url: "assets/img/send.png", name: "xóa"},
  { url: "assets/img/send.png", name: "xóa"},
  { url: "assets/img/send.png", name: "xóa"},
  { url: "assets/img/send.png", name: "xóa"},
  { url: "assets/img/send.png", name: "xóa"},
  { url: "assets/img/send.png", name: "xóa"},
  { url: "assets/img/send.png", name: "xóa"},
]
  constructor() { }

  ngOnInit(): void {
    
      }
}