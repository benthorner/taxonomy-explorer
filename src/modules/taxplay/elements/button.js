export class ButtonElement {
  constructor(name, callback) {
    this.name = name
    this.callback = callback
  }

  attach(element) {
    this.element = d3.select(element)
      .append("button")
      .attr("type", "button")
      .classed("taxtton", true)
      .html(this.name)
      .on("click", this.callback.bind(this))
  }
}
