class Cube {
    // #1 생성자 매개변수 선언
    constructor(width, length, height) {
        this.width = width;
        this.length = length;
        this.height = height;
    }
    // #2 직육면체 부피 구하기
    getVolume() {
        return this.width * this.length * this.height;
    }
}
let [cWidth, cLength, cHeight] = [1, 2, 3];
let cube = new Cube(cWidth, cLength, cHeight);
console.log("1번 세로 : ", cube.width, "cm");
console.log("2번 부피 : ", cube.getVolume(), "ml");
