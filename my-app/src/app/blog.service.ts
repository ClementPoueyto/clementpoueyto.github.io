import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseURL = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-type':'application/json'});

  constructor(private http: HttpClient) { }

  getAllFormations(): Observable<any>{
    return this.http.get(this.baseURL + '/formations/',
    {headers : this.httpHeaders});
  }
  getAllProjets(): Observable<any>{
    return this.http.get(this.baseURL + '/projets/',
    {headers : this.httpHeaders});
  }

  getAllCompetences(): Observable<any>{
    return this.http.get(this.baseURL + '/competences/',
    {headers : this.httpHeaders});
  }
}
