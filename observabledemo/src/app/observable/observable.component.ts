import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  orderStatus:any='';
  orderStatus1:any='';
  data:Observable<any>;
  data1:Observable<any>;
  constructor() { }

  ngOnInit() {
     this.data = new Observable(observer => {

        setTimeout(() => {
          observer.next('In Progress');
        },1000);

        setTimeout(() => {
          observer.next('Processing....');
        },3000);

        setTimeout(() => {
          observer.next('Completed');
        },6000);

    });

    this.data1 = new Observable(observer => {

      setTimeout(() => {
        observer.next('Order Recieved');
      },1500);

      setTimeout(() => {
        observer.next('Preparing your Food....');
      },4500);

      setTimeout(() => {
        observer.next('Out For Delivery');
      },8000);

  });

    this.data.subscribe(val => {

        this.orderStatus = val;
    });

    this.data1.subscribe(val2 => {
        this.orderStatus1 = val2;
    });
  
  }

}
