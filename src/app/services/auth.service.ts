import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private BASE_URL = environment.base_url;
  productSelectionSaved:boolean=true;

  constructor(private http: HttpClient) { }

  login(data: any) {
    let params = new HttpParams()
    .set('username', data.username)
    .set('password', data.password)
      return this.http.post(`${this.BASE_URL}/login/?`, params, { headers: this.headers });
  }
}
