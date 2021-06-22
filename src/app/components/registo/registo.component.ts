import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DungeonService } from 'src/app/services/dungeon.service';
import { InfoPlayerService } from 'src/app/services/info-player.service';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent implements OnInit {

  name = "";
  pass = "";
  pass2 = "";
  router : Router;

  constructor(private pedir: DungeonService, private jogador: InfoPlayerService, router : Router) { this.router = router; }

  registar(){
    if (this.pass == this.pass2) {
      this.pedir.registar(this.name, this.pass)
      .subscribe(arg => console.log(arg));
      this.LogIn();
    }
    else {
      this.name = ""
      this.pass = ""
      this.pass2 = ""
      alert("Palavras passe incorretas!");
    }
  }

  LogIn(){
    this.pedir.doLogIn(this.name, this.pass).subscribe(
      arg => {
        this.jogador.IdPlayer = arg['data'];
        this.jogador.username = this.name;
        this.jogador.password = this.pass;
        this.router.navigate(['/CreateChart']);
      }
    )
  }

  ngOnInit(): void {
  }

}
