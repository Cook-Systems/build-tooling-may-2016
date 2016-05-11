import punctuation from 'punctuation'

class WelcomeController {
  constructor () {
    this.message = punctuation.punctuate(punctuation.BANG, 'dumb')
  }
}

export default WelcomeController
