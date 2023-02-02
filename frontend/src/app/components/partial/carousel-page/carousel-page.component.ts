import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-page',
  templateUrl: './carousel-page.component.html',
  styleUrls: ['./carousel-page.component.css']
})
export class CarouselPageComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    margin: 29,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0:{
            items:2
        },
        576:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:5
        },
        1200:{
            items:6
        }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


  slides = [
    {id: "1", img: "assets/img/vendor-1.jpg"},
    {id: "2", img: "assets/img/vendor-2.jpg"},
    {id: "3", img: "assets/img/vendor-3.jpg"},
    {id: "4", img: "assets/img/vendor-4.jpg"},
    {id: "5", img: "assets/img/vendor-5.jpg"},
    {id: "6", img: "assets/img/vendor-6.jpg"},
    {id: "6", img: "assets/img/vendor-7.jpg"},
    {id: "6", img: "assets/img/vendor-8.jpg"}
  ];
}
