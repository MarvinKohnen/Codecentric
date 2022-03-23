console.log('Lets Go');

function addition(n1:number, n2:number, showResult:boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number' ){
    //   throw new Error('Incorrect input!');
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

const number1 = 5; // = 5.0; konstante, wenn variable gewünscht dann 'let number1 = 5'
const number2 = 2.8;
const printThisResult = true;
const resultPhrase = 'Result is: ';
addition(number1,number2, printThisResult, resultPhrase);


