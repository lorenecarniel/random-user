import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './interface';

interface IResponse {
  results: IUser[]
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://randomuser.me/api';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<IResponse>(this.url, {
      params: new HttpParams({ fromObject: { results: '5' } })
    });
  }
}
