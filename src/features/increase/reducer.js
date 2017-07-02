import { INCREASE } from './actions'

export const reducer = (count = 0, action) => {
  switch(action.type) {
    case INCREASE:
      return count + 1
    default:
      return count
  }
}