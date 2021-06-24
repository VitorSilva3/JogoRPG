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
  per = this.jogador.chart;

  constructor(private pedir : DungeonService, private jogador : InfoPlayerService, router : Router) { this.router = router }

  ngOnInit(): void {
    if (this.jogador.username == undefined) {
      this.router.navigate(['']);
    }

    this.pedir.myChart(this.jogador.IdPlayer).subscribe(
      arg => { this.chartInf = arg["data"].Personagens;
        this.chartInf = this.chartInf[this.per];
        console.log(this.chartInf)
      }
    );

    this.pedir.otherChar().subscribe(
      arg => { this.chartInfI = arg["data"];
      console.log(this.chartInfI)
      console.log(this.chartInfI)
      }
    )
  }

  sair() {
    this.router.navigate(['/Home']);
  }

  armas(){
    console.log("ENTROU")
    console.log(this.chartInf.ID)
    console.log(this.chartInfI.ID)
    this.pedir.buscarArma(this.chartInf.ID).subscribe(
      arg => console.log(arg["data"].Armas[0])
    )

    this.pedir.buscarArma(this.chartInfI.ID).subscribe(
      arg => console.log(arg)
    )
  }

}
