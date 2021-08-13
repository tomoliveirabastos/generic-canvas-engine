import { Personagem } from "../Personagem";
interface IUpdateMethods{
       main(p: Personagem, canvas: HTMLCanvasElement): void
}
class Update implements IUpdateMethods{
       public main(p: Personagem, canvas: HTMLCanvasElement) : void{
              if (p.getY() > canvas.height) {
                let speed = p.getSpeed();
          
                speed *= -0.99;
          
                p.setSpeed(speed);
              }
          
              p.setSpeed(p.getSpeed() + 0.1);
          
              const newPosY = p.getY() + p.getSpeed();
          
              p.setY(newPosY);
       }
}

export {Update}