function add(n1: number, n2:number) {
    return n1 + n2;
}

function printResult(num: number): void {  //This function doesnt have a return statement -> void
    console.log('Result: ' + num)
}
printResult(add(5,12));
console.log(printResult(add(5,12)))

let combineValues: (a:number ,b:number) => number; 
combineValues = add;
//combineValues = printResult; error bc only expects 1 argument
//combineValues = 5; error bc no function 

console.log(combineValues(8,8));


function addAndHandle(n1: number, n2:number, callback: (num: number) => void) {
    const result = n1 + n2;
    callback(result);
}


addAndHandle(10,20,(result) => {
    console.log(result);
});