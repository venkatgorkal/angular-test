import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  private REST_API_SERVER = "http://ec2-18-216-175-1.us-east-2.compute.amazonaws.com:8080/person/list";
  private LOCAL_URL = "http://localhost:8080/person/list";
  

  constructor(private httpClient:HttpClient) { }

  public getPersonList(): Observable<Person[]>{
     return this.httpClient.get<Person[]>(this.REST_API_SERVER).pipe(map(res=>res['personList']));
  }
}
