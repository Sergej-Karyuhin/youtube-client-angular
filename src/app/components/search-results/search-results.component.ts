import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  data;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.data = this.dataService.getData();
    console.log(this.data);
  }

}
