import { Injectable } from '@angular/core';
import { Chart } from "../classes/chart";

@Injectable({
  providedIn: 'root'
})
export class InfoPlayerService {

  constructor() { }

  IdPlayer: any;
  username: any;
  password: any;
  chart: any;

  personagem: Array<Chart> = new Array<Chart>();

}
