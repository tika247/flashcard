/**
 * controll drag
 * @param {HTMLTableRowElement} this.root
 */
export class DragController implements DragControllerType {
  root: HTMLTableRowElement;
  dragTarget: NodeListOf<HTMLTableElement>;
  dragArea: Array<HTMLDivElement>;
  dragging: {
    trWidth: number;
    index: number | null;
    target: HTMLDivElement | null;
    startPoint: number | null;
  };
  klass: { [key: string]: string };

  constructor(root: HTMLTableRowElement) {
    this.klass = {
      dragTarget: "th, td",
      dragArea: "v-dragArea",
    };

    this.root = root;
    this.dragTarget = this.root.querySelectorAll(this.klass.dragTarget);
    this.dragArea = [];
    this.dragging = {
      trWidth: this.root.clientWidth,
      target: null,
      index: null,
      startPoint: null,
    };
  }
  async init() {
    await this.setting();
    this.addEvent();
  }
  async setting() {
    await this.addDragArea();
  }
  async addDragArea() {
    if (!this.dragTarget) return;
    const length = this.dragTarget.length - 1;

    this.dragTarget.forEach((el: HTMLTableElement, i: number) => {
      if (i !== length) {
        const dragArea = document.createElement("div");
        dragArea.classList.add(this.klass.dragArea);
        this.dragArea.push(dragArea);
        el.append(dragArea);
      }
    });
  }
  addEvent() {
    // for (const el of this.dragArea) {
    // }
    this.dragDiv();
  }
  dragDiv() {
    //el: HTMLDivElement
    if (!this.root) return;
    this.root.addEventListener("dragstart", (e: DragEvent) => {
      const target = e.target;
      if (
        target instanceof HTMLDivElement &&
        target.classList.contains(this.klass.dragArea)
      ) {
        target;
        this.dragging["target"] = target;
        this.dragging["index"] = this.dragArea.findIndex(
          (item) => item === this.dragging["target"]
        );
        this.dragging["startPoint"] = this.root.clientWidth;
        this.dragging["startPoint"] = e.pageX;
        console.log(this.dragging["index"]);
      }
    });
    this.root.addEventListener("drag", (e: DragEvent) => {
      if (this.dragging["target"] !== e.target || !this.dragging["startPoint"])
        return;
      const diff = this.dragging["startPoint"] - e.pageX;
      const percentage = (diff / this.dragging["trWidth"]) * 100;
      console.log(percentage);
    });
    this.root.addEventListener("dragend", (e: DragEvent) => {
      if (this.dragging["target"] !== e.target || !this.dragging["startPoint"])
        return;
      this.dragging["target"] = null;
      this.dragging["startPoint"] = null;
    });
  }
}
