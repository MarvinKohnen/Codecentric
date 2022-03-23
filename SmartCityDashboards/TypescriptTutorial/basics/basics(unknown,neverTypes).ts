let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

//userName = userInput; this doesnt work, because unknown Type signals, that it might not be a string
if (typeof userInput === 'string') {
    userName = userInput;
} 
//this is better

function generateError(message: string, code: number) : never { 
    throw { message: message, errorCode: code };
}
//this function never returns anything, as an error crashes our code

generateError('An error occured!', 500);
