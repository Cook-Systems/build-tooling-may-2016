import BANG from 'bang'
import COMMA from 'comma'
import PERIOD from 'period'

const punctuate =
  (punctuation, string = '') => {
    switch (punctuation) {
      case BANG: return string + BANG
      case COMMA: return string + COMMA
      case PERIOD: return string + PERIOD
      default: throw new Error(`unrecognized punctuation: ${punctuation}`)
    }
  }

export default {
  BANG,
  COMMA,
  PERIOD,
  punctuate
}
