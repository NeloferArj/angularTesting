import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private http: HttpClient) { }
  private apiUrl = 'http://date.jsontest.com';

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching data:', error);
          throw error;
        })
      );
  }
}
