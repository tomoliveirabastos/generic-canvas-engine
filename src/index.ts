import { Personagem } from "./Personagem";
import { Engine } from "./Engine";
import { KeyboardListener } from "./KeyboardListener";
import { Render } from "./Render/Render";
import { Update } from "./Update/Update";

const update = new Update();
const render = new Render();
const keyboardListener = new KeyboardListener(document);

const personagem = new Personagem({ x: 0, y: 0, size: 20, speed: 0.1 });

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const engine = new Engine(ctx);

canvas.height = 600;
canvas.width = 600;

engine.update((a: Personagem) => update.main(a), personagem);
engine.render(
  (a: Personagem, b: CanvasRenderingContext2D, c: HTMLCanvasElement) =>
    render.main(a, b, c),
  personagem,
  ctx,
  canvas,
);

engine.run();
keyboardListener.run();
document.body.appendChild(canvas);
