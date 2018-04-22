export class SelectHandler {
  constructor(editor) {
    this.editor = editor
    this.editor.on("afterEnter", this.afterEnter, this)
    this.editor.on("nodeSelected", this.nodeSelected, this)
  }

  afterEnter() {
    this.editor.g
      .selectAll(".node")
      .attr("tabindex", 0)
      .on("click", (d) => {
        this.editor.trigger("nodeSelected", d)
      })
      .on("focus", (d) => {
        this.editor.trigger("nodeSelected", d)
      })
  }
}
