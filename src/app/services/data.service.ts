import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YOUTUBE_RESPONSE } from '../response/response-youtube-example';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    // return this.http.get('../../assets/response-youtube-example.json');
    return YOUTUBE_RESPONSE;
  }

}
