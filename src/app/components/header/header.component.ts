import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  value = 'Clear me';
  @Output() submit = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
