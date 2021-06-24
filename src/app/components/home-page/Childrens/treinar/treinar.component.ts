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
  ultimoTreino : boolean;
  treino;
  dia = new Date();
  jaTrei : boolean;
  idChart = this.jogador.personagem[this.jogador.chart].id;
  nome = this.jogador.personagem[this.jogador.chart].name;
  atk = this.jogador.personagem[this.jogador.chart].atk;
  int = this.jogador.personagem[this.jogador.chart].int;
  hp = this.jogador.personagem[this.jogador.chart].lp;

  constructor(private pedir:DungeonService, private jogador:InfoPlayerService, router : Router) { this.router = router; }

  ngOnInit(): void {
    if (this.jogador.username == undefined){
      this.router.navigate(['']);
    }

    this.ultimoTreino = localStorage.getItem("Treino") ? true : false;
    if (this.ultimoTreino == false) {
      this.conteudo("nao");
    }
    else {
      this.treino = JSON.parse(localStorage.getItem("Treino"));
      if (this.treino.Treino == this.dia.getDate()) {
        this.conteudo("ja");
      }
      else {
        this.conteudo("nao");
      }
    }

  }

  sair() {
    this.router.navigate(['/Home'])
  }

  conteudo(oq){
    if (oq == "ja") {
      this.jaTrei = true;
    }
    else {
      this.jaTrei = false;
    }
  }

  treinar(este: HTMLButtonElement) {
    console.log(este.value)
    if (este.value == 'atk') {
      this.atk++;
      this.pedir.updateChar(this.idChart, this.nome, this.atk, this.int, this.hp).subscribe(
        arg => console.log(arg)
      );
    }
    else if (este.value == 'int') {
      this.int++;
      this.pedir.updateChar(this.idChart, this.nome, this.atk, this.int, this.hp).subscribe(
        arg => console.log(arg)
      );
    }
    else {
      this.hp++;
      this.pedir.updateChar(this.idChart, this.nome, this.atk, this.int, this.hp).subscribe(
        arg => console.log(arg)
      );
    }
    this.treino = {
      Treino : this.dia.getDate()
    }
    localStorage.setItem("Treino", JSON.stringify(this.treino));
    this.router.navigate(['/Home'])
  }

}
