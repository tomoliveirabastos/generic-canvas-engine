import { Personagem } from "./Personagem";
import { Engine } from "./Engine";
import { KeyboardListener } from "./KeyboardListener";
import { Render } from "./Render/Render";
import { Update } from "./Update/Update";

const update = new Update();
const render = new Render();
const keyboardListener = new KeyboardListener(document);

const personagem = new Personagem({ x: 0, y: 0, size: 20, speed: 0.1 });

const canvas: HTMLCanvasElement = document.createElement("canvas");
const ctx: any = canvas.getContext("2d");
const engine = new Engine(ctx);

canvas.height = 400;
canvas.width = 400;

engine.update(update.main, personagem, canvas);
engine.render(render.main, personagem, ctx, canvas);

engine.run();
keyboardListener.run();

document.body.appendChild(canvas);
