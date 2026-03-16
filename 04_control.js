var score = 95;

// if문
if (score >= 90) console.log("합격입니다!")

if (score < 90) console.log("불합격입니다.");

// if-else 문(일을 두 번 하지않아도되서 더 빠르다!)

if (score >= 90) {
    console.log("합격입니다!");
}
else {
    console.log("불합격입니다!");
}

var age = 15;

if (age >= 19) {
    console.log("성인입니다");
}
if (age >= 13 && age < 19) {
    console.log("청소년입니다");
}
if (age < 13) {
    console.log("어린이입니다");
}

//다중 if문

if (age >= 19) {
    console.log("성인입니다.");
} else if (age >= 13 && age <19) {
    console.log("청소년입니다.");
} else {
    console.log("어린이입니다.");
}

var dustLevel = 120;  // 미세먼지 수치

if (dustLevel > 150) {
    console.log("경고");
} else if (dustLevel > 80) {
    console.log("주의");
}

if (dustLevel > 80) {
    if (dustLevel > 150) {              // if문 안에 if문을 쓸 수도 있다.(위의 식과 같은 내용인데 이의 식은 한 단계로 처리한거고 이건 두 단계로 처리한 것)
        console.log("경고");            // if문은 이렇게 많이 태우기보다 적게 태우는게 낫다. 많아지면 생각해야하는 분기점이 너무 많아짐.
    } else {
        console.log("주의");
    }
}

switch (true) {                    //true니까 자바스크립트가 실행함
    case dustLevel > 150:          //case문이라고 부름
        console.log("경고");
        console.log("마스크를 꼭 착용해주세요.");
        break;                     //이걸 써야만 아래 case를 실행하지않음.
    case dustLevel > 80:
        console.log("주의")
}

var fruit = "banana";

switch (fruit) {
    case "apple":                        // case는 코드를 시작할 때의 시작점이라는 얘기.
        console.log("사과입니다.");
    case "banana":
        console.log("바나나입니다.");
    case "melon":
        console.log("멜론입니다.");
}


var day = "수요일";

switch (day) {
    case "월요일":                         //***case는 시작점. break 만날때까지 내려간다.
    case "화요일":
    case "수요일":
    case "목요일":
    case "금요일":
        console.log("평일입니다. 학원에 나오세요.");
        break;
    case "토요일":
    case "일요일":
        console.log("주말입니다. 휴식하세요.");
        break;                            // 생략가능. 어차피 이후에 코드블록을 빠져나갈거니까 마지막은 생략가능
}

var color = 2;

switch (color) {
    case 1:
        console.log("빨간색");
        break;
    case 2:
        console.log("주황색");
        break;
    case 3:
        console.log("노란색");
        break;
    default:                        //else와 같은 것.
        console.log("모르겠어요.");
    case 5:
        console.log("파란색");
}


for (var i = 0; i <= 3; i++) {
    console.log(i + "출력");
    if (i == 2) {
        break;                             // for문도 break를 써줄 수 있다!!
    }
}


for (var i = 0; i <= 3; i++) {
    console.log(`이 사이클은 ${i} 사이클`)
    if (i == 2) {
        continue;
    }
    console.log(i + "출력");
}


for (var i = 1; ;i++) {      // 조건식을 생략할 수 있음. 이렇게되면 무한루프가 돈다.
    console.log(i);
    if (i > 100) {
        break;
    }
}

var num = 5;
for (;;) {      // 아예 다 생략 가능하지만, 자릿수는 지켜줘야 함. 근데 이러면 무한 루프가 돈다.
    if (num === 5) {
        break;
    }
}


for (var i = 2; i <= 9; i++) {
    // i가 2일 때부터, 9일 때까지 반복 작업 => 10인 사이클에서 탈락
    for (var j = 2; j <= 9; j++) {
        // j가 2일때 부터, 9일 때 까지 반복작업 => 10인 사이클에서 탈락
        console.log(`${i} * ${j} = ${i * j}`)
    }
}


for (var i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log("짝");
    } else {
        console.log(`${i}`)
    }
}


for (var k= 10; k <= 100; k++); {
    if ( k % 2 == 0)
        console.log(`${k}`)
}


for ( var z = 1; z <= 10; z++) {
    if ( z === 7) {
        continue;
    }
    console.log(`${z}`);
}