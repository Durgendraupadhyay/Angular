import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-products',
  // template: `<h1>{{name | uppercase}}</h1>`,
  // styles: [``]
  template: `<h1>This is a angular session</h1>
            <hr>
            <p>{{name | uppercase}}</p>
            <p> use of backticks allows to write code in multiple lines</p>
            <h1>{{todaydate | date:'d/M/Y'}}</h1>
            <h1>{{todaydate | date:'shortTime'}}</h1>
            <h1>{{curr | currency:"INR"}}</h1>
            <h1>{{0.2454532 | percent}}</h1>
            <h2>{{454.32313 | number:'7.8-8'}}</h2>
            <h1>{{details | json}}</h1>`,

  styles: [`
            h1{
              border:1px solid black;
            }
        `]
})
export class ProductsComponent implements OnInit {

  name:string="Durgendra";
  todaydate = new Date;
  curr:number = 700;
  details = {
    name:"isha",
    age:22
  }
  constructor() { }

  ngOnInit(): void {
  }

}
