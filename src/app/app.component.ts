import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  lat = 51.678418;
  lng = 7.809007;
  
  choseLocation(event: any) {
    console.log(event);
  }
}
