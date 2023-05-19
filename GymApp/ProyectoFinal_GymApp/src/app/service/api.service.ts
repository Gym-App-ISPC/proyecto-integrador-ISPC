import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  public getData(route: string): Observable<any> {
    const url = this.urlApi + route;
    return this.http.get<any>(url);
  }
}
