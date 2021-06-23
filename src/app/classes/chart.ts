export class Chart {
    name: string;
    id: number;
    atk: number;
    isMonster: number;
    int: number;
    lp: number;
    img: any;
    idPlayer: number;
    weapon: any;

    constructor(name: string, id: number, atk: number, isMonster: number, int: number, lp: number, img: any, idPlayer: number, weapon: any) {
      this.name = name;
      this.id = id;
      this.atk = atk;
      this.isMonster = isMonster;
      this.int = int;
      this.lp = lp;
      this.img = img;
      this.idPlayer = idPlayer;
      this.weapon = weapon;
    }

}
