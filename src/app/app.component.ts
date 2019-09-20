import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion-stock-client';

  showSideBar = false


  showHide(showSideBar) {

    this.showSideBar = showSideBar

  }
}
