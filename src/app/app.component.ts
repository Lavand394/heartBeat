import { Component } from '@angular/core';
import {ConnectionService} from 'ng-connection-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hearbeat';
   status = 'ONLINE';
   isConnected = true;

   constructor(private ConnectionService: ConnectionService){
     this.ConnectionService.monitor().subscribe(isConnected =>  {
       this.isConnected = isConnected;
       if(this.isConnected){
         this.status = "ONLINE";
       } else {
         this.status = "OFFLINE"
       }
       alert(this.status);
     });
   }
}
