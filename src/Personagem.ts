interface IPersonagem {
  x: number;
  y: number;
  size: number;
  speed: number;
}
interface IPersonagemMethods {
  getX(): number;
  getY(): number;
  getSize(): number;
}
class Personagem implements IPersonagemMethods {
  private x: number;
  private y: number;
  private size: number;
  private speed: number;
  constructor(personagem: IPersonagem) {
    this.x = personagem.x;
    this.y = personagem.y;
    this.size = personagem.size;
    this.speed = personagem.speed;
  }

  public getX(): number {
    return this.x;
  }
  public getY(): number {
    return this.y;
  }
  public getSize(): number {
    return this.size;
  }
  public getSpeed(): number {
    return this.speed;
  }
  public setSpeed(speed: number) {
    this.speed = speed;
  }
  public setSize(size: number) {
    this.size = size;
  }
  public setY(y: number) {
    this.y = y;
  }
  public setX(x: number) {
    this.x = x;
  }
}

export { Personagem };
