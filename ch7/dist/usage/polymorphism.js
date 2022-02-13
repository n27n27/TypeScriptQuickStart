class Led {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return "LED => " + this.name;
    }
}
class Oled {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return "OLED => " + this.name;
    }
}
class MonitorDisplayTest {
    // 개선 전
    display1(monitor) {
        if (monitor instanceof Led) {
            // 변수에 지정된 타입과 타입 어설션은 생략 가능
            let myMonitor = monitor;
            return myMonitor.getName();
        }
    }
    // 개선 후
    display2(monitor) {
        let myMonitor = monitor;
        return myMonitor.getName();
    }
}
let displayTest = new MonitorDisplayTest();
console.log(`
1번 ${displayTest.display1(new Led("LED TV"))}
2번 ${displayTest.display1(new Led("OLED TV"))}
3번 ${displayTest.display2(new Led("LED TV"))}
4번 ${displayTest.display2(new Led("OLED TV"))}
`);
