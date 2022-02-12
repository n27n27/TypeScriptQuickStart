// 공통으로 사용할 콜백함 수 정의
let callbackEcho = message => message;
let callbackEchoWithLength = message => `${message}(${message.length})`;
function echoFunction2(message, callback) {
    return callback(message);
}
let responseEcho = echoFunction2("hello", callbackEcho);
let responseEchoWithLength = echoFunction2("hello", callbackEchoWithLength);
console.log(responseEcho);
console.log(responseEchoWithLength);
