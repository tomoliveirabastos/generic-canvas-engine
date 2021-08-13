interface KeyboardMethods {
  getLastEvent(): KeyboardEvent;
  run(): void;
}
class KeyboardListener implements KeyboardMethods {
  private document: Document;
  private keyboardListener: KeyboardEvent;
  private logKeys: Array<string>;
  constructor(document: Document) {
    this.document = document;
    this.logKeys = [];
    this.keyboardListener = new KeyboardEvent("keydown");
    this.run.bind(this);
    this.setKeyboardListener.bind(this);
    this.getLastEvent.bind(this);
  }

  private setKeyboardListener(kb: KeyboardEvent): this {
    if (!this.logKeys) {
      this.logKeys = [];
    }

    this.keyboardListener = kb;
    this.logKeys.push(kb.key);
    return this;
  }

  public getLastEvent(): KeyboardEvent {
    return this.keyboardListener;
  }
  public run() {
    this.document.addEventListener("keydown", this.setKeyboardListener);
  }
}

export { KeyboardListener };
