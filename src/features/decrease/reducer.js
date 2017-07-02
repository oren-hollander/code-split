import { DECREASE } from './actions'

export const reducer = (count = 0, action) => {
  switch(action.type) {
    case DECREASE:
      return count - 1
    default:
      return count
  }
}