interface ICount{
    readonly count: number;
}

class TestReadonly implements ICount{
    readonly count: number;             // 클래스의 멤버 변수에 선언할 수 있음
    static readonly count2: number;     // static 지정가능
    private readonly count3: number;    // 접근 제한자 지정가능
    readonly count4: number = 0;        // 초기화 가능
    getCount(){
        // this.count4 = 0; 재할당불가
        // readonly count5: number = 0; 메서드에 선언불가
    }
}

function getCount(){
    // readonly count: number; 함수에 선언 불가
}

// readonly는 객체 리터럴의 속성 앞에 지정 가능
let literalObj: {readonly alias: string} = {alias: "happy"};
// literalObj.name = "happy"; readonly로 지정된 타입으로 인해 할당 불가
// literalObj = "test";  readonly로 지정된 타입으로 인해 할당 불가