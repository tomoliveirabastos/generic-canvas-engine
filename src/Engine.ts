interface IEngineMethods {
  run(): void;
  update(updateParameter: Function, ...paramUpdate: any): void;
  render(renderParameter: Function, ...paramRender: any): void;
}

interface ICanvasObjects {
  function: Function;
  params: Array<any>;
}
class Engine implements IEngineMethods {
  private ctx: any;
  private _update: ICanvasObjects;
  private _render: ICanvasObjects;
  constructor(ctx: any) {
    this.ctx = ctx;
    this._update = {
      function: () => {},
      params: [],
    };
    this._render = {
      function: () => {},
      params: [],
    };
  }

  public run(): this {
    const update = this._update;
    const render = this._render;

    render.function(...render.params);
    update.function(...update.params);
    requestAnimationFrame(() => this.run());

    return this;
  }

  public update(functionParameter: Function, ...params: any): this {
    this._update = {
      function: functionParameter,
      params: [...params],
    };

    return this;
  }
  public render(functionParameter: Function, ...params: any): this {
    this._render = {
      function: functionParameter,
      params: [...params],
    };
    return this;
  }
}

export { Engine };
