// function scope
// let z = 5;

// One task per a function
function multiply(x, y) {
    // console.log(z, k);
    return x * y;
}
// let k = 9;
multiply(2, 4);
 // k = 10;

//Default values
function printMessage(from = 'Talal', text) {
    return from + ': ' + text;
    
}

// console.log(printMessage(printMessage.from, 'hello'));

// nullish : null , undefiend

function count(x, n) {
    // let count = ((x != undefined && x != null) &&
    //     (n != undefined && n != null))
    //     ? [] : 'uncountable';
    let count = [];
    x = x ?? 0;
    n = n ?? 5;
    for (let i = x ; i <= n ; i++) {
         
        count.push(i);
        
     }
   
    return count;
}

console.log(count( null, null));

function showName(fullname) {
    return fullname ?? 'unknown';
}

//console.log(showName('Safwan'));
