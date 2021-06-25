import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DungeonService } from 'src/app/services/dungeon.service';
import { InfoPlayerService } from 'src/app/services/info-player.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  name = "";
  pass = "";
  router: Router;

  constructor(private pedir: DungeonService, private jogador: InfoPlayerService, router : Router) { this.router = router; }

  LogIn() {
    this.pedir.doLogIn(this.name, this.pass)
    .subscribe(arg => {
      console.log("entrou" + arg);
      console.log(arg['data']);
      if (arg['code'] == 200) {
        this.jogador.IdPlayer = arg['data'];
        this.jogador.username = this.name;
        this.jogador.password = this.pass;
        this.jogador.chart = 0;
        this.router.navigate(['/Home']);
      }
      else {
        alert("Credenciais Inválidas!");
        this.name = "";
        this.pass = "";
      }
    } );
  }

  ngOnInit(): void {
  }

}
