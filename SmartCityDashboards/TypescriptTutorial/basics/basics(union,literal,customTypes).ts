type Combinable = number | string; //CUSTOM TYPE + union types

function combine(input1: Combinable, input2: Combinable, resultConversion: 'as-number' | 'as-text') {  
     // union types (input1,2): both accepted, resultConversion LITERAL TYPE - only these 2 are allowed
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result= input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return +result; //+result returns it as number; is = to: parseFloat(result)
    } else {
        return result.toString();
    }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges)

const combinedNames = combine('Max', 'Anna', 'as-text')
console.log(combinedNames);