console.log('hello world')

class Player {
    constructor(desiredNick) {
      this.nick = desiredNick
      this.points = 0
    }
    greet() {
      console.log(`Hello, I am ${this.nick}`)
    }
    play() {
      let randomNum = Math.floor(Math.random() * 10)
      this.points += randomNum
      return `I gained ${randomNum} points and I am at ${this.points}`
    }
  }
  const foo = new Player('Foo')
  const fizz = new Player('Fizz')

  class volumeRocker {
    state= ``

    up() {
        this.state += '😀'
    }
  }
  const rocker = new volumeRocker