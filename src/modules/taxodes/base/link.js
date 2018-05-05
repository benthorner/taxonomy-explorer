export class Link {
  constructor(node) {
    this.node = node
  }

  reset() {
    this.node.children = null
    return Promise.resolve()
  }
}