import { Personagem } from "../Personagem";

interface IRenderMethods {
  main(
    p: Personagem,
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
  ): void;
}
class Render implements IRenderMethods {
  public main(
    p: Personagem,
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    clear: boolean = true,
  ) {
    if (clear) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    ctx.fillRect(p.getX(), p.getY(), p.getSize(), p.getSize());
  }
}

export { Render };
