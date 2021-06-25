import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'src/app/classes/chart';
import { DungeonService } from 'src/app/services/dungeon.service';
import { InfoPlayerService } from 'src/app/services/info-player.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user = "";
  router:Router;
  chartInf;
  per = this.jogador.chart;
  qtCharts;
  idChart;

  constructor(private pedir : DungeonService, private jogador : InfoPlayerService, router : Router) { this.router = router }

  ngOnInit(): void {

    this.user = this.jogador.username;
    if (this.jogador.username == undefined)
    this.router.navigate(['']);

    this.pedir.myChart(this.jogador.IdPlayer).subscribe(
      arg => { this.chartInf = arg["data"].Personagens;
      console.log(this.chartInf)
      this.qtCharts = this.chartInf.length - 1;
      for (let i = 0; i < this.chartInf.length; i++) {
        this.jogador.personagem.push(new Chart(
          this.chartInf[i].Nome,
          this.chartInf[i].ID,
          this.chartInf[i].Atk,
          this.chartInf[i].IsMonset,
          this.chartInf[i].Int,
          this.chartInf[i].Vida,
          this.chartInf[i].Imagem,
          this.chartInf[i].ID_Player,
          this.chartInf[i].Weapon));
      }
      console.log(this.jogador.personagem)
      }
    )
  }
  sair() {
    this.router.navigate(['']);
  }

  eliminar(){
    this.idChart = this.jogador.personagem[this.per].id;
    console.log(this.jogador.personagem[this.per].id);
    this.pedir.deleteChar(this.idChart).subscribe(
      arg => console.log(arg)
    );
    this.ngOnInit();
  }

  mudarEs(){
    if (this.per != 0) {
      this.per--;
      this.jogador.chart = this.per;
    }
  }

  mudarDi(){
    if (this.per < this.qtCharts ) {
      this.per++;
      this.jogador.chart = this.per;
    }
  }
}
