console.clear();

// make a timer which will beep after a set time has passed. 
// can set unlimited number of alarms using command line args 

// function that accepts commandline args //
// will need to use .argv -- process.argc.slice(2) -- this turns the input into a string!!!! 

// func block should have //
// arrow function syntax? -- timer() => { statements }
// count down timer where the set start is cml input -- 
// an beep when timer ends.
// for a beep/ding ---  process.stdout.write('\x07');  --- \x07 is a special charactor code 

// edge cases? -- what happens if? // 

// no input? -- no beeps and program ends -- if statement?
// input is a negitive number? -- console.log(we cant schedule anything in the past) -- if statement?
// an input is not a number? -- skip these insead of trying to call setTimeout with a non-number. if statement?



const timeSet = process.argv.slice(2);

const timer = function () {
  let totalSeconds = 0;
  for (let seconds of timeSet) {
    totalSeconds += Number(seconds);
    setTimeout(() => {
      console.log('ding');
    },
      totalSeconds * 1000);
    
  };
}

timer();