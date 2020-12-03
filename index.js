// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}
mondayWork()
// Also works
// function mondayWork(activity="go to the office") {
//   return `This Monday, I will ${activity}.`
// }

function wrapAdjective(string="*") {
  return function(name="special") {
    return `You are ${string}${name}${string}!`
  }
}

const Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b){
    return a / b;
  }
}

let actionApplyer = function(string, array) {
  let start = string
  for(let i = 0; i < array.length; i++) {
    start = array[i](start)
  }
  return start
}