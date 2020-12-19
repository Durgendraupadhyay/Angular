import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // fname:string = "poornima";
  // age:number = 21;

  // productList:Array<string> =["iphone","redmi","one plus"]; 
  // productList1:Array<any> = [
  //   {name:"poornima",age:21},
  //   {name:"isha",age:22}
  // ];
  // getText():String{
  //   return "Hello" + this.fname;
  // }

  image:any = "assets/images/onepiece.jpg";
  data:string = "Straw Hat Pirates";
  url:string = "https://www.youtube.com";

  display(){
    //return "Display function is called";
    this.url="https://www.google.com";
  }
  constructor() { }

  ngOnInit() {
  }

}
