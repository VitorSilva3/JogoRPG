import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DungeonService } from 'src/app/services/dungeon.service';
import { InfoPlayerService } from 'src/app/services/info-player.service';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {

  router: Router;
  chartInf;
  chartInfI;
  armasT;
  armasI;
  atk: number;
  atkI: number;
  per = this.jogador.chart;
  vez;
  nvAtk;
  probAcer;

  constructor(private pedir : DungeonService, private jogador : InfoPlayerService, router : Router) { this.router = router }

  ngOnInit(): void {
    if (this.jogador.username == undefined) {
      this.router.navigate(['']);
    }

    this.vez = 0;

    this.pedir.myChart(this.jogador.IdPlayer).subscribe(
      arg => { this.chartInf = arg["data"].Personagens;
        this.chartInf = this.chartInf[this.per];
        this.atk = this.chartInf.Atk;
      }
    );

    this.pedir.otherChar().subscribe(
      arg => { this.chartInfI = arg["data"];
      this.atkI = this.chartInfI.Atk;
      }
    )
  }

  sair() {
    this.router.navigate(['/Home']);
  }

  armas(){
    if (this.armasT == undefined && this.armasI == undefined) {

    this.pedir.buscarArma(this.chartInf.ID).subscribe(
      arg => {this.armasT = arg["data"].Armas;
      for (let i = 0; i < this.armasT.length; i++) {
        this.atk = +this.atk + +this.armasT[i].Atk;
      }
    })

    this.pedir.buscarArma(this.chartInfI.ID).subscribe(
      arg => {this.armasI = arg["data"].Armas
      for (let i = 0; i < this.armasI.length; i++) {
        this.atkI = +this.atkI + +this.armasI[i].Atk;
      }
    })
    }
  }

  batalha() {

    if (this.chartInf.Vida >= 0 && this.chartInfI.Vida >= 0) {
      if (this.vez % 2 == 0) {
        // vez do jogador
        this.vez++;

        this.probAcer = (this.chartInf.Int + (this.chartInf.Int * 3)) * 2;
        this.nvAtk = Math.floor(Math.random() * 100);
        console.log(this.nvAtk)
        if ( (this.nvAtk >= 0 && this.nvAtk <= this.chartInf.Int) ) {
          alert(this.chartInf.Nome + ', Ataque Critico');
          this.chartInfI.Vida = this.chartInfI.Vida - this.atk;
        }
        else if ( (this.nvAtk > this.chartInf.Int && this.nvAtk <= this.probAcer) ) {
          alert(this.chartInf.Nome + ', Ataque Normal');
          this.chartInfI.Vida = this.chartInfI.Vida - Math.round(this.atk / 2);
        }
        else {
          alert(this.chartInf.Nome + ', Falha');
        }
      }
      else {
        // vez inimigo
        this.vez++;

        this.probAcer = (this.chartInfI.Int + (this.chartInfI.Int * 3)) * 2;
        this.nvAtk = Math.floor(Math.random() * 100);
        console.log(this.nvAtk)
        if ( (this.nvAtk >= 0 && this.nvAtk <= this.chartInfI.Int) ) {
          alert(this.chartInfI.Nome + ', Ataque Critico');
          this.chartInf.Vida = this.chartInf.Vida - this.atkI;
        }
        else if ( (this.nvAtk > this.chartInfI.Int && this.nvAtk <= this.probAcer) ) {
          alert(this.chartInfI.Nome + ', Ataque Normal');
          this.chartInf.Vida = this.chartInf.Vida - Math.round(this.atkI / 2);
        }
        else {
          alert(this.chartInfI.Nome + ', Falha');
        }
      }
    }
    else {
      this.armasT = undefined;
      this.armasI = undefined;
      alert ("Acabou!");
      this.ngOnInit();
    }
  }

}
