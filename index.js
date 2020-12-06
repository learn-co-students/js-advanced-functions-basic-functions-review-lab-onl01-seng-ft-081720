function saturdayFun(activity = 'roller-skate'){
 return `This Saturday, I want to ${activity}!`
}
function mondayWork(job = "go to the office"){
    return `This Monday, I will ${job}.`
}
function wrapAdjective(flair = '*'){
    return function(arg = "special"){
        return `You are ${flair}${arg}${flair}!`
    }
}

const Calculator = {
    add: function(){ return 1 + 3},
    subtract: function(){ return 1 - 3},
    multiply: function(){ return 1 * 3},
    divide: function(){return 10 / 5}

}

function actionApplyer(integer,array){
    for (let i = 0; i < array.length; i++) {
        integer = array[i](integer);
      }
      return integer;

}



