import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { User } from '../admin/model/User';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getUsers()
  {
    return this.httpClient.get<User[]>('http://localhost:8080/users/get');
  }
  addUser(newUser: User) {
    return this.httpClient.post<User>('http://localhost:8080/users/add', newUser);   
  }
  deleteUser(id: number) {
    return this.httpClient.delete<User>('http://localhost:8080/users/' + id);
  }
}
