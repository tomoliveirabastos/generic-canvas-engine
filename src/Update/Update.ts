import { Personagem } from "../Personagem";
interface IUpdateMethods {
  main(p: Personagem): void;
}
class Update implements IUpdateMethods {
  private lastKeyPressed: string;
  constructor() {
    this.lastKeyPressed = "ArrowDown";
    document.addEventListener("customEventKeyPressed", (e: any) => {
      this.lastKeyPressed = e.detail.key;
    });
  }
  public main(p: Personagem): void {
    const x = p.getX();
    const y = p.getY();

    const obj: any = {
      "ArrowUp": (p: Personagem) => {
        p.setY(y - 2);
      },
      "ArrowDown": (p: Personagem) => {
        p.setY(y + 2);
      },
      "ArrowLeft": (p: Personagem) => {
        p.setX(x - 2);
      },
      "ArrowRight": (p: Personagem) => {
        p.setX(x + 2);
      },
    };

    obj[this.lastKeyPressed](p);
  }
}

export { Update };
