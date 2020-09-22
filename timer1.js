console.clear();
// variable that is = to the input from the user on cli
const timeSet = process.argv.slice(2);

// if the num entered is less than or equaL to 0, return "cant travel back in time"
for (let i = 0; i < timeSet.length; i++) {
  //console.log(Number(timeSet[i]));
  if (Number(timeSet[i]) <= 0) {
    console.log("cant travel back in time");
    timeSet.splice(i, 1);
  }
  // if the input on the cli is not a number, return "Not a number"
  if (Number.isNaN(Number(timeSet[i]))) {
  //if (!Number.isInteger(timeSet[i])) {
    console.log("Not a number");
    timeSet.splice(i, 1);
  }
}

// timer function that iterats 1x per second (1000ms)
const timer = function () {
  //console.log(timeSet)
  // starts count at 0
  let totalSeconds = 0;
  //loops through the numbers entered by user and sets totalSeconds to the number entered on cli
  for (let seconds of timeSet) {
    totalSeconds += Number(seconds);
    // setTimeout prints 'ding' to screen after waiting the value of totalseconds * 1 sec (1000ms)
    setTimeout(() => console.log('ding'),
    totalSeconds * 1000); 
  }
};
// calls the timer function
timer();



