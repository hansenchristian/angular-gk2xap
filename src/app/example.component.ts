import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
})
export class ExampleComponent {
  tabbed() {
    console.log('tabbed');
  }
}
