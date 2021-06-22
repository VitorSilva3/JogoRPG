import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPlayerService {

  constructor() { }

  IdPlayer: any;
  username: any;
  password: any;

  jogador: any = {
    name: "",
    id: "",
    atk: "0",
    isMonset: "",
    int: "0",
    lp: "0",
    img: "",
    idPlayer: "",
    weapon: ""
  };

}
