import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }

  getAccounts() : Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders(
          { 
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': `Basic ` + btoa('coalition:skills-test'),
          }
      )
  }
    return this.http.get<any>("https://fedskillstest.coalitiontechnologies.workers.dev", httpOptions);
  }
}
