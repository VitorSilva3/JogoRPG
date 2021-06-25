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
  LinkDeleteChart = "http://moreiramoises.pt/server/apis/deleteChart.php";
  LinkGetChar = "http://moreiramoises.pt/server/apis/get/getChar.php";
  LinkGetRandomChar = "http://moreiramoises.pt/server/apis/get/getRandomChar.php?";
  LinkCriarArma = "http://moreiramoises.pt/server/apis/createArma.php";
  LinkArma = "http://moreiramoises.pt/server/apis/get/getArma.php";

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

  criarChart(name, atk, int, vida) {
    let dataToSend:FormData = new FormData();

    dataToSend.append('name', name);
    dataToSend.append('atk', atk);
    dataToSend.append('isMonster', 'false');
    dataToSend.append('int', int);
    dataToSend.append('vida', vida);
    dataToSend.append('username', this.infoPlayer.username);
    dataToSend.append('password', this.infoPlayer.password);

    return this.http.post(this.LinkCreateChart, dataToSend);
  }

  myChart(IdPlayer) {
    return this.http.get(this.LinkGetChar, {
      params:{'PlayerID': IdPlayer}
    });
  }

  otherChar() {
    return this.http.get(this.LinkGetRandomChar);
  }

  updateChar(idChar, name, atk, int, vida) {
    let dataToSend:FormData = new FormData();

    dataToSend.append('idChar', idChar);
    dataToSend.append('name', name);
    dataToSend.append('atk', atk);
    dataToSend.append('isMonster', 'false');
    dataToSend.append('int', int);
    dataToSend.append('vida', vida);
    dataToSend.append('username', this.infoPlayer.username);
    dataToSend.append('password', this.infoPlayer.password);

    return this.http.post(this.LinkUpdateChart, dataToSend);
  }

  deleteChar(idChar){
    let dataToSend:FormData = new FormData();

    dataToSend.append('username', this.infoPlayer.username);
    dataToSend.append('password', this.infoPlayer.password);
    dataToSend.append('idPersonagem', idChar);

    return this.http.post(this.LinkDeleteChart, dataToSend);
  }

  criarArma(name, atk, durabilidade, tipo, vida, idChar) {
    let dataToSend:FormData = new FormData();

    dataToSend.append('name', name);
    dataToSend.append('atk', atk);
    dataToSend.append('durabilidade', durabilidade);
    dataToSend.append('tipoDeArma', tipo);
    dataToSend.append('vida', vida);
    dataToSend.append('username', this.infoPlayer.username);
    dataToSend.append('password', this.infoPlayer.password);
    dataToSend.append('idPersonagem', idChar);


    return this.http.post(this.LinkCriarArma, dataToSend);
  }

  buscarArma(idPerso) {
    return this.http.get(this.LinkArma, {
      params:{'IDPersonagem': idPerso}
    });
  }

}
