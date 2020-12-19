import { Component, OnInit, Input , Output ,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  @Output() msgToEmit = new EventEmitter<string>();

   @Input() recieveFromParent:string;

   sendMsgToParent(msg:string){
      this.msgToEmit.emit(msg);
   }
  constructor() { }

  ngOnInit() {
  }

}
