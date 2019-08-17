export default class Task {
  type: string
  column: string
  position?: number
  element: {
    id: string
    text: string
  }

  constructor(text: string) {
    this.type = 'Card'
    this.column = 'todo'
    this.element = {
      id: (Math.random() * 10).toString().replace('.', ''),
      text,
    }
  }
}
