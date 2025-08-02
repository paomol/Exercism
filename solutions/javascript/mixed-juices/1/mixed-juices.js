// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5
      break;
    case 'Energizer':
    case 'Green Garden':
      return 1.5
      break;
    case 'Tropical Island':
      return 3
      break;
    case 'All or Nothing':
      return 5
      break;
    default:
      return 2.5
  }
  
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let count=0
  let sum=0
  let y=0
  
    for (let i=0; i<limes.length;i++){
      if (sum>=wedgesNeeded){
        break;
      }
      switch (limes[i]) {
        case 'small':
          count= 6
          break;
        case 'medium':
          count= 8
          break;
        case 'large':
          count= 10
          break;
      }
      sum=count+sum
      y=y+1;
    }
    
  return y
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let beb=0
  let s=0
  while (timeLeft>0 && s<orders.length){
  switch (orders[s]) {
    case 'Pure Strawberry Joy':
      beb= 0.5
      break;
    case 'Energizer':
    case 'Green Garden':
      beb= 1.5
      break;
    case 'Tropical Island':
      beb= 3
      break;
    case 'All or Nothing':
      beb= 5
      break;
    default:
      beb= 2.5
  }
  timeLeft=timeLeft-beb;
    s=s+1;
  }
  return orders.slice(s);
}
