interface IEngineMethods{
       loop(): void
       update(updateParameter : Function, ...paramUpdate : any): void
       render(renderParameter: Function, ...paramRender: any): void
}

interface ICanvasObjects{
       function : Function,
       params: Array<any>
}
class Engine implements IEngineMethods{
       private ctx : any
       private updateObj : ICanvasObjects
       private renderObj : ICanvasObjects
       constructor(ctx : any){
              this.ctx = ctx;
              this.updateObj = {
                     function : () => {},
                     params: []
              }
              this.renderObj = {
                     function : () => {},
                     params: []
              }
       }

       public loop(): this {

              const update = this.updateObj
              const render = this.renderObj

              render.function(...render.params)
              update.function(...update.params)
              
              requestAnimationFrame(this.loop)
              return this
       }

       public update(functionParameter: Function, ...params:any): this {
              this.updateObj = {
                     function : functionParameter,
                     params: [...params],
              }

              return this
       }
       public render(functionParameter: Function, ...params:any): this {
              this.renderObj = {
                     function : functionParameter,
                     params: [...params]
              }
              return this
       }
} 

export {Engine}