import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
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
  list = {
		freespin_valid_until_full_day: 0,
		has_freespins: 0,
		has_lobby: 1,
		has_tables: 0,
		image: "https://staging.slotegrator.com/api/index.php/image/get?hash=e88a563aed2cc6ddbfc263587def1d6d0e0eb145.png",
		is_mobile: 1,
		name: "Roulette",
		provider: "Vivogaming",
		technology: "HTML5",
		type: "roulette",
		uuid: "e88a563aed2cc6ddbfc263587def1d6d0e0eb145"
	}
  defaultHeaderObj = {

  }

  constructor(private http: HttpClient) {

  }

  getAllGames() {

    const authObj: object = {
      'page': 2,
    };
    this.gameHeaders = this.xSignGenerate(authObj);
    return this.http.get(`${this.stageURl}/games?page=2`, { headers: this.gameHeaders });

  }
  getGameLobby() {
    const authObj: object = {
      "currency":"EUR",
       'game_uuid':"e88a563aed2cc6ddbfc263587def1d6d0e0eb145"

    };
    this.gameHeaders = this.xSignGenerate(authObj);
    return this.http.get(`${this.stageURl}/games/lobby?game_uuid=e88a563aed2cc6ddbfc263587def1d6d0e0eb145&currency=EUR`, { headers: this.gameHeaders });

  }

  fetchGameUrl(data:any) {
    console.log(data)
    var token:any=JSON.parse(localStorage.getItem('token') !)
    const authObj: object = {
       'game_uuid':"e88a563aed2cc6ddbfc263587def1d6d0e0eb145",
       'player_id':"demo_123",
       'player_name':"demo",
       "currency":"EUR",
       'session_id':'yfuwqurfuwtrquywuq1212121',
       'lobby_data':data


    };
    this.gameHeaders = this.xSignGenerate(authObj);
    return this.http.post(`${this.stageURl}/games/init`,authObj, { headers: this.gameHeaders });

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
    console.log(xSignParams)
    const xSign = crypto.createHmac("sha1", "4953e491031d3f9e7545223885cf43a7403f14cb").update(xSignParams.toString()).digest('hex');
    return new HttpHeaders({
      'X-Merchant-Id': 'ae88ab8ee84ff40a76f1ec2e0f7b5caa',
      'X-Timestamp': data['X-Timestamp'],
      'X-Nonce': uniqId_string,
      'X-Sign': xSign
    });
  }
}
