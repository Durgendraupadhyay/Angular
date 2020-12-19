import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  detailsForm:FormGroup;
    fname:string;
    email1:string;

  constructor(private formBuilder:FormBuilder) {

      this.detailsForm = formBuilder.group({
        name:  ['',[Validators.required,Validators.minLength(4)]],                             //new FormControl(), 
        email: ['',[Validators.required,Validators.email]]                              // new FormControl()

      });
   }

  ngOnInit(): void {
  }

  postData(){
    this.fname = this.detailsForm.value.name;
    this.email1 = this.detailsForm.value.email;
    //console.log(this.detailsForm.value.name);
  }

}
