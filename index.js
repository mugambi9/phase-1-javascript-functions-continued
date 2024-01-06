// code your solut
function saturdayFun(activity = "roller-skate"){ 
    return `This Saturday, I want to ${activity}!`; 
}

console.log(saturdayFun("bathe my dog !")) 
// =>`This Saturday, I want to roller-skate'
function mondayWork(activity = "go to the office"){

    return `This Monday, I will ${activity}.`;

}

console.log(mondayWork("work from home"))

// his Monday, I will go to the office
function wrapAdjective(symbol) {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    }
  }