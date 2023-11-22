// Implement an alarm clock / timer which will beep after a specified
// amount of time has passed. 
// The user can specify an unlimited number of alarms using command line arguments


// do not beep && end if no numbers provided

// ignore & skip negative numebrs or NAN

// Read Command Line Arguments

let numbers = process.argv.slice(2);

const beep = function() {
  process.stdout.write('\x07');
}

const scheduleBeep = function (delay) {
  delay = Number(delay);
  if (!isNaN(delay) && delay > 0) {
    setTimeout(beep, delay * 1000)
  }
}

for (const num of numbers) {
  scheduleBeep(num)
}
