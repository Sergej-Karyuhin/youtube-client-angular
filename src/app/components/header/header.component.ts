import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  value;

  @Output() eventSubmit = new EventEmitter();

  submit(value) {
    this.eventSubmit.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
