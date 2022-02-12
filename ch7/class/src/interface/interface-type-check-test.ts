interface ICar {name: string;}
class MyCar {}

let mCar: ICar = {name: "car"};
console.log(typeof mCar);
console.log(typeof MyCar);
// console.log(typeof ICar);