function echoFunction(message, callback) {
    return callback(message);
}
let responseMessage = echoFunction("hello world!", message => message);
console.log(responseMessage);
