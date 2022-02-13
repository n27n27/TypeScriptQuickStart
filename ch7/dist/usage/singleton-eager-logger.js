class EagerLogger {
    // #2 private을 붙여 객체로 생성되지 않도록 함
    EagerLogger() { }
    // #3 static을 붙여 외부 접근을 가능케 함
    static getLogger() {
        return this.uniqueObject;
    }
    // #4 정보 로그를 출력
    info(message) {
        console.log(`[info] ${message}`);
    }
    // #5 경고 로그를 출력
    warnning(message) {
        console.log(`[warn] ${message}`);
    }
}
// #1 부지런한 초기화
EagerLogger.uniqueObject = new EagerLogger();
// #6 유일한 객체를 얻고 메서드(info, warning)를 사용함
let eagerLogger = EagerLogger.getLogger();
let eagerLogger2 = EagerLogger.getLogger();
eagerLogger.info("1번 : 정보 log");
eagerLogger.warnning("2번 : 경고 log");
eagerLogger.info(`3번 : ${eagerLogger === eagerLogger2}`);
