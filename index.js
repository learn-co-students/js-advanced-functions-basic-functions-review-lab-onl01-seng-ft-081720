function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*") {
    return function(wish="special") {
       return `You are ${string}${wish}${string}!`
    }
}

const Calculator = {
    add(a,b) {
    return a + b
   },
   subtract(a,b) {
    return a - b
   },
   multiply(a,b) {
    return a * b
   },
   divide(a,b) {
    return a/b
   }
}

function actionApplyer(int,array) {
    let num = int
    for (const arr of array ) {
        num = arr(num)
    }
    return num
}