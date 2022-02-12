class AbstractBird {
    // 구현 메서드
    fly() {
        this.flySound("파닥파닥");
    }
    // 구현 메서드
    getHabitat() {
        console.log(`<${this.birdName}>의 서식지는 <${this.habitat}> 입니다.`);
    }
}
class WildGoose extends AbstractBird {
    // 추상 멤버 변수를 상속함
    constructor(birdName, habitat) {
        super();
        this.birdName = birdName;
        this.habitat = habitat;
    }
    // 추상 메서드를 오버라이딩
    flySound(sound) {
        console.log(`<${this.birdName}>가 <${sound}> 날아갑니다.`);
    }
}
let whildGoose = new WildGoose("기러기", "순천만 갈대밭");
whildGoose.fly();
whildGoose.getHabitat();
