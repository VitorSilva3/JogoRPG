import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DungeonService } from 'src/app/services/dungeon.service';
import { InfoPlayerService } from 'src/app/services/info-player.service';

@Component({
  selector: 'app-treinar',
  templateUrl: './treinar.component.html',
  styleUrls: ['./treinar.component.css']
})
export class TreinarComponent implements OnInit {

  router : Router;
  nome = this.jogador.personagem[this.jogador.chart].name;
  atk = this.jogador.personagem[this.jogador.chart].atk;
  int = this.jogador.personagem[this.jogador.chart].int;
  hp = this.jogador.personagem[this.jogador.chart].lp;

  constructor(private pedir:DungeonService, private jogador:InfoPlayerService, router : Router) { this.router = router; }

  ngOnInit(): void {
    if (this.jogador.username == undefined)
    this.router.navigate(['']);
  }

}
