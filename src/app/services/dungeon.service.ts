import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPlayerService } from './info-player.service';

@Injectable({
  providedIn: 'root'
})
export class DungeonService {

  constructor(private http : HttpClient, private infoPlayer : InfoPlayerService) {
  }

  linkLogIn = "http://moreiramoises.pt/server/apis/login.php";
  linkRegis = "http://moreiramoises.pt/server/apis/signup.php";
  LinkCreateChart = "http://moreiramoises.pt/server/apis/createChart.php";
  LinkUpdateChart = "http://moreiramoises.pt/server/apis/updateChart.php";
  LinkGetChar = "http://moreiramoises.pt/server/apis/get/getChar.php";
  LinkGetRandomChar = "http://moreiramoises.pt/server/apis/get/getRandomChar.php?";

  doLogIn(name, pass){
    let bodyData:FormData = new FormData();
    bodyData.append("username", name);
    bodyData.append("password", pass);
    return this.http.post(this.linkLogIn, bodyData);
  }

  registar(nome, pass) {
    let dataToSend:FormData = new FormData();
    dataToSend.append("username", nome);
    dataToSend.append("password", pass);

    return this.http.post(this.linkRegis,dataToSend);
  }

  criarChart(name, atk, int, vida, username, password) {
    let dataToSend:FormData = new FormData();

    dataToSend.append('name', name);
    dataToSend.append('atk', atk);
    dataToSend.append('isMonster', 'false');
    dataToSend.append('int', int);
    dataToSend.append('vida', vida);
    dataToSend.append('username', username);
    dataToSend.append('password', password);

    return this.http.post(this.LinkCreateChart, dataToSend);
  }

  myChart(IdPlayer) {
    return this.http.get(this.LinkGetChar, {
      params:{'PlayerID': IdPlayer}
    });
  }

}
