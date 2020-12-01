let n = 5
let line = ''
let match = (n + 1) / 2;
let left = match
let right = match



for (let index = 0; index <= match; index += 1) {
    for(let indexTwo = 1; indexTwo <= n; indexTwo += 1) {
        if (indexTwo > right && indexTwo < left) {
            line += '*';
        }
        else {
            line += ' ';
        }
        
    }
    console.log(line)
    line = ''
    left += 1;
    right -= 1;
}

