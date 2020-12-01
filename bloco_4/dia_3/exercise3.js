let n = 5
let nDiminuindo = n;
let line = ''



for (let index = 0; index < n; index += 1) {
    for(indexTwo = 0; indexTwo <= n; indexTwo += 1) {
        if (indexTwo < nDiminuindo) {
            line += ' ';
        }
        else {
            line += '*';
        }
        
    }
    console.log(line)
    line = ''
    nDiminuindo -= 1;
}