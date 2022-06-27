import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var sha1 = require('sha-1');
var crypto1 = require('crypto-js');
var crypto = require('crypto-browserify');
var httpBuildQuery = require('http-build-query');
var uniqid = require('uniqid'); 
var MD5 = require("crypto-js/md5");

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private gameHeaders: any
  private BASE_URL = environment.base_url;
  productSelectionSaved: boolean = true;
  stageURl = "https://staging.slotegrator.com/api/index.php/v1"

  constructor(private http: HttpClient) {
  }

  login(data: any) {
    return this.http.post(`${this.BASE_URL}/login?username=` + data.username + '&password=' + data.password, { headers: this.headers });
  }

  register(data: any) {
    return this.http.post(`${this.BASE_URL}/register`,data, { headers: this.headers });
  }
  get() {
    let p=uniqid(Math.random(),true);
    p=MD5(p).toString();
    let obj:any =[
      {"X-Merchant-Id":'ae88ab8ee84ff40a76f1ec2e0f7b5caa'},
      {"X-Timestamp": Math.floor(Date.now() / 1000.).toString()},
     {"X-Nonce": p}
    ];
  var searchParameters = new URLSearchParams();
  Object.keys(obj).forEach(function(parameterName) {
    searchParameters.append(parameterName, obj[parameterName]);
  });
  // console.log(obj)
  //   console.log(obj.toString());
    
    // let y=httpBuildQuery(obj);
    // console.log(y)
    // let y: any = sha1(x);
    var buf1 = crypto.createHmac("sha1","4953e491031d3f9e7545223885cf43a7403f14cb").update(searchParameters.toString()).digest('hex');
var buf2=buf1;  
console.log(buf1);
    // let z: any =crypto.HmacSHA1(searchParameters.toString(),'4953e491031d3f9e7545223885cf43a7403f14cb');
    // console.log(z)
    //  let t=crypto.enc.Base64.stringify(z);
    // console.log(t)
    this.gameHeaders = new HttpHeaders({
      'X-Merchant-Id': 'ae88ab8ee84ff40a76f1ec2e0f7b5caa',
      'X-Timestamp':Math.floor(Date.now() / 1000.).toString(),
      'X-Nonce': p,
       'X-Sign':buf1});
    // return this.http.post(`${this.BASE_URL}/login?username=`, { headers: this.headers });
    return this.http.get(`${this.stageURl}/games`, { headers: this.gameHeaders });
  }
}
