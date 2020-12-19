import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comtact',
  templateUrl: './comtact.component.html',
  styleUrls: ['./comtact.component.css']
})
export class ComtactComponent implements OnInit {


  Name:string;
  email:string;
  



  constructor() { }

  ngOnInit(): void {
  }

  loginuser(login:NgForm)
  {
    this.Name = login.value.fname;
    this.email= login.value.email;
    //this.ctry=login.value.country;
  }

}
