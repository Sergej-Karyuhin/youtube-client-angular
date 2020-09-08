import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  data;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.data = this.dataService.getData();
  }

}
