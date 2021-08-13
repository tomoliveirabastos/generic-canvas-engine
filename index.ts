import {Personagem} from "./Personagem";
import {Engine} from "./Engine";

const personagem = new Personagem({
       x: 0,
       y: 0,
       size: 20
});

const canvas : HTMLCanvasElement = document.createElement("canvas")
const ctx : any = canvas.getContext("2d")

canvas.height = 400
canvas.width = 400

document.body.appendChild(canvas)

const engine = new Engine(ctx)
