import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private pedir : DungeonService, private jogador : InfoPlayerService, router : Router) { this.router = router }

  ngOnInit(): void {

    this.user = this.jogador.username;

    if (this.jogador.username == undefined)
    this.router.navigate(['']);

    this.pedir.myChart(this.jogador.IdPlayer).subscribe(
      arg => { this.chartInf = arg["data"].Personagens[0];
      console.log(this.chartInf);
      }
    )
  }
}
