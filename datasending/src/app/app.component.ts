import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datasending';

  fullname:string = "Nayan Deosarkar";


  recieveMessageFromChild:string;

  msgToChild:String = "Message from parent";

  getMsg(msg:string){
    this.recieveMessageFromChild = msg;
  }
}
