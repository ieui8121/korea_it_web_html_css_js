//score 변수에 임의의 숫자를 할당
//조건에 따라서 등급을 부여 
//90점 이상이면 A 80점 이상이면 B 70점 이상이면 C
//나머지 F

let score = 85;
let grade;

if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log(`점수: ${score}, 등급: ${grade}`);