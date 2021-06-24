import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DungeonService } from 'src/app/services/dungeon.service';
import { InfoPlayerService } from 'src/app/services/info-player.service';

@Component({
  selector: 'app-criar-arma',
  templateUrl: './criar-arma.component.html',
  styleUrls: ['./criar-arma.component.css']
})
export class CriarArmaComponent implements OnInit {

  router : Router;
  name;
  atk;
  durabilidade;
  tipo = "";
  vida;
  idChart = this.jogador.personagem[this.jogador.chart].id;

  constructor(private pedir:DungeonService, private jogador:InfoPlayerService, router : Router) { this.router = router; }

  ngOnInit(): void {
    if (this.jogador.username == undefined){
      this.router.navigate(['']);
    }

    if (this.jogador.personagem[this.jogador.chart].weapon != undefined) {
      alert("Este personagem já tem arma!");
      this.router.navigate(['/Home']);
    }
  }

  criar() {
    this.pedir.criarArma(this.name, this.atk, this.durabilidade, this.tipo, this.vida, this.idChart).subscribe(
      arg => console.log(arg)
    );
    this.jogador.personagem[this.jogador.chart].weapon = 1;
    console.log(this.jogador.personagem);
  }

}
