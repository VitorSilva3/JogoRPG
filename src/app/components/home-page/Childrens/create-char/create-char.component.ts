import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DungeonService } from 'src/app/services/dungeon.service';
import { InfoPlayerService } from 'src/app/services/info-player.service';

@Component({
  selector: 'app-create-char',
  templateUrl: './create-char.component.html',
  styleUrls: ['./create-char.component.css']
})
export class CreateCharComponent implements OnInit {

  router : Router;
  limite = 30;
  atk = 0;
  int = 0;
  hp = 0;
  name;

  constructor(private pedir:DungeonService, private jogador:InfoPlayerService, router : Router) { this.router = router; }

  ngOnInit(): void {
    if (this.jogador.username == undefined)
    this.router.navigate(['']);
  }

  sair() {
    this.router.navigate(['/Home'])
  }

  criar() {
    if((this.atk + this.int + this.hp) > this.limite || (this.atk + this.int + this.hp) < 0 || (this.atk < 0 || this.int < 0 || this.hp < 0)){
      alert("Só podes distribuir 30 pontos nas caracteristicas");
    }
    else{
      this.pedir.criarChart(this.name, this.atk, this.int, this.hp).subscribe(
        arg => {console.log(arg)}
      )
    }
  }

}
