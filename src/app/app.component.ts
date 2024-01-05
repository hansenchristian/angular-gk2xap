import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  public count = [0, 1, 2, 3, 4];

  tabbed(count) {
    console.log('tabbed ', count);
  }
}
