import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube-client-angular';
  isOpen = false;
  inputValue;
  submit(value) {
    this.isOpen = true;
    this.inputValue = value;
  }
}
