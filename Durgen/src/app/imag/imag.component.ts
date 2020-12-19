import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imag',
  templateUrl: './imag.component.html',
  styleUrls: ['./imag.component.css']
})
export class ImagComponent implements OnInit {

  image:any = "assets/images/anime.jpg";
  image1:any = "assets/images/goku.jpg";
  // Display1(){
    
  //   this.image= "assets/images/onepiece.jpg"
  
  // }
  // Display2(){
    
  //   this.image="assets/images/goku.jpg";
  // }
  // Display3(){
    
  //   this.image="assets/images/zoro.jpg";
  // }
  // Display4(){
    
  //   this.image="assets/images/luffy.jpg";
  // }
  constructor() { }

  ngOnInit() {
  }

}
