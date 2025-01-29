import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _httpClient: HttpClient) { }

  public getUsers(): Observable<any> {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  public getStatus(): boolean {
    return true;
  }
}
