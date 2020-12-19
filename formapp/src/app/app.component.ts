import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CarModel } from './car-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Car Model';
  motors = ['petrol', 'Electric' , 'Diesel' , 'Unknown'];

  carModel = new CarModel(1,'','',false);

  submitted = false;

  onSubmit(){
    this.submitted=true;
  }
  getCurrentModel(){
    return  JSON.stringify(this.carModel);
  }
}
