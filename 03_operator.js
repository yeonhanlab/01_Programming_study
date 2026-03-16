var a = 10;
var b = 3;


console.log("---- 산술 연산자 ----:");

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);


console.log(`a % b = ${a % b}`);

console.log("---- 증감 연산자 예제 ----");

var x = 5;
console.log("x =", x);                           // 5

console.log("x++ =", x++);  // 출력 후 1 증가     // 5
console.log("x =", x);                          // 6


console.log("++x =", ++x); // 1 증가 후 출력     // 7
console.log("x =", x);                         // 7

console.log("++x =", ++x); // 1 증가 후 출력    // 8
console.log("x =", x);                        // 8

console.log("x-- =", x--);  // 출력 후 1 감소   // 8
console.log("x =", x);                        // 7

console.log("--x =", --x);  // 1감소 후 출력   // 6
console.log("x =", x);                       // 6

var num1;
num1 = 10;     // "=" 은 할당 연산자

num1 += 5;     // x = x + 5; 이걸 줄여서 썼을 뿐


num1 += 5;      // x = x + 5; 이걸 줄여서 썼을 뿐
num1 -= 5;      // x = x - 5; 이걸 줄여서 썼을 뿐


var num2 = 1;
var bool1 = true;

console.log(num2 == bool1);       // 1 == true        // == 는 값만 비교
console.log(num2 === bool1);      // 1 === true       // === 는 값과 타입이 같은지 비교

// 삼항 연산자 ***************************************************************************
// 사용법 : 조건식 ? 참일 때 실행되는 코드 : 거짓일 때 실행되는 코드
//         조건식 -> 비교 연산자를 사용한 '식'이 써져야 함 -> 경과가 true, false로 나오는 식

var result = num2 === bool1 ? "같다" : "다르다";
console.log(result);


var year = 1992;
var result2 = year <= 1980 ? "1980 이전" : "1980 이후";
console.log(result2);

var result3 = true ? true : false;
console.log(result3);


// 논리합 (||)         => 둘 중에 하나라도 true면 true
var loginUser = "admin";
var gender = "male";

var result4 = loginUser === "admin" || gender === "female";


// 논리곱 (&&)         => 둘 다 true여야 true
var result5 = loginUser === "admin" && gender === "female";



// 부정 연산자 (!)

var result6 = !true;     //false
var result7 = !false;    //true
var refult8 = !(loginUser === "admin")      // false
var result9 = !loginUser;         //  false -> loginUser 값이 있느냐 없느냐를 부정하는 것. 값이 있는걸 부정하니 false
var result10 = !!loginUser;       //  true  => 값이 있는지 없는지 판별


// typeof 연산자 => 데이터 타입을 문자열로 반환.
console.log(typeof result2);   //result2에 뭐가 들어있는지 보려고 할 때.


if (typeof x === "number") { x++;}

var eee = typeof x === "number" ? x++ : x;
// 1. eee라는 변수에 무언가의 값을 저장해야 하는 일                 (네번째 해야됨)   => eee = 6, x = 7
// 2. typeof x에 대해서 값이 무엇이 나오는지 확인해야 하는 일       (첫번째 해야됨)   => "number"
// 3. typeof x의 값과 "number"라고 하는 값을 비교하는 일          (두번째 해야됨)
// 4. x++ 를 실행해서 eee에 저장을 하든                          (세번째 해야됨)
// 5. x를 eee에 저장을 하든                                     (X)

var type = typeof x;     //  "number"