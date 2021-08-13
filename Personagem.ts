interface IPersonagem{
     x: number, 
     y: number, 
     size: number, 
}
interface IPersonagemMethods{
       getX() : number
       getY() : number
       getSize() : number
}
class Personagem implements IPersonagemMethods{
       private x : number;
       private y : number;
       private size : number;
       constructor(personagem : IPersonagem){
              this.x = personagem.x;
              this.y = personagem.y;
              this.size = personagem.size;
       }

       public getX() : number { return this.x; }
       public getY() : number { return this.y; }
       public getSize() : number { return this.size; }
}

export {Personagem}