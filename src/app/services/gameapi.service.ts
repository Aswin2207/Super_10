import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
var sha1 = require('sha-1');
var crypto1 = require('crypto-js');
var crypto = require('crypto-browserify');
var httpBuildQuery = require('http-build-query');
var uniqid = require('locutus/php/misc/uniqid');
var MD5 = require('locutus/php/strings/md5');
var mt_rand = require('locutus/php/math/mt_rand');

@Injectable({
  providedIn: 'root'
})
export class GameapiService {
  gameHeaders: any;
  stageURl = environment.game_stage_url;
  defaultHeaderObj = {

  }

  constructor(private http: HttpClient) {

  }

  getAllGames() {

    const authObj: object = {
      'page': 1,
    };
    this.gameHeaders = this.xSignGenerate(authObj);
    return this.http.get(`${this.stageURl}/games?page=1`, { headers: this.gameHeaders });

  }

  xSignGenerate(data: any) {
    const randomNbr = mt_rand();
    const uniqId = uniqid(randomNbr, true)
    const uniqId_string = MD5(uniqId).toString();
    data = {
      "X-Merchant-Id": 'ae88ab8ee84ff40a76f1ec2e0f7b5caa', "X-Nonce": uniqId_string,
      "X-Timestamp": Math.floor(Date.now() / 1000.).toString(),...data
    }
    const xSignParams = httpBuildQuery(data);
    const xSign = crypto.createHmac("sha1", "4953e491031d3f9e7545223885cf43a7403f14cb").update(xSignParams.toString()).digest('hex');
    return new HttpHeaders({
      'X-Merchant-Id': 'ae88ab8ee84ff40a76f1ec2e0f7b5caa',
      'X-Timestamp': data['X-Timestamp'],
      'X-Nonce': uniqId_string,
      'X-Sign': xSign
    });
  }
}
