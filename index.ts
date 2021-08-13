import {Personagem} from "./Personagem";
import {Engine} from "./Engine";
import {KeyboardListener} from "./KeyboardListener";

const keyboardListener = new KeyboardListener(document)
const personagem = new Personagem({
       x: 0,
       y: 0,
       size: 20,
       speed : 0.1
});

const canvas : HTMLCanvasElement = document.createElement("canvas")

const ctx : any = canvas.getContext("2d")

canvas.height = 400

canvas.width = 400

document.body.appendChild(canvas)

const engine = new Engine(ctx)
engine.update((p: Personagem, canvas : HTMLCanvasElement) => {

       if(p.getY() > canvas.height){

              let speed = p.getSpeed()

              speed *= -0.99

              p.setSpeed(speed);

       }

       p.setSpeed(p.getSpeed() + 0.1)

       const newPosY = p.getY() + p.getSpeed()

       p.setY(newPosY)

}, personagem, canvas)
engine.render((p: Personagem, ctx : CanvasRenderingContext2D, canvas : HTMLCanvasElement) => {
       ctx.clearRect(0, 0, canvas.width, canvas.height)
       ctx.fillRect(p.getX(), p.getY(), p.getSize(), p.getSize())
}, personagem, ctx, canvas)

engine.run()
keyboardListener.run()