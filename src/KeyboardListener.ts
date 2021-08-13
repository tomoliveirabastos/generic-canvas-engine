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
    this.getLastEvent.bind(this);
  }

  public getLastEvent(): KeyboardEvent {
    return this.keyboardListener;
  }
  public run() {
    this.document.addEventListener("keydown", (kb) => {
      if (!this.logKeys) {
        this.logKeys = [];
      }

      this.keyboardListener = kb;
      this.logKeys.push(kb.key);

      const newEvent = new CustomEvent("customEventKeyPressed", {
        detail: kb,
      });

      this.document.dispatchEvent(newEvent);

      return this;
    });
  }
}

export { KeyboardListener };
