import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  items = [1, 2, 3, 4, 5];
  data;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.data = this.dataService.getData();
    console.log(this.data);
  }

}
