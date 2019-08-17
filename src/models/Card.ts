export default class Card {
  type: string
  column: string
  position?: number
  element: {
    id?: string
    text: string
  }

  constructor(text: string, id?: string) {
    this.type = 'Card'
    this.column = 'todo'
    this.element = {
      id,
      text,
    }
  }
}
