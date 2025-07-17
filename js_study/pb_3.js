//1. title, author, publisherYear 속성을 포함하는 book 객체 생성
//  해리포터, J.K 롤링, 1997
//2. book 객체의 title과 author 속성 값을 출력 (점 표기법, 대괄호)
//3. book 객체에 getAge()라는 메소드 추가
//   현재 연도(new Date().getFullYear())에서 publisherYear를 뺀 값을 리턴
//4. getAge() 호출해서 출력
//5. book 객체에 새로운 속성 genre를 추가하고 값을 할당 ("판타지")
//6. book 객체의 publisherYear를 2000으로 수정

const book = {
  title: "해리포터",
  author: "J.K 롤링",
  publisherYear: 1997,
};

console.log(book.title);
console.log(book["author"]);

book.getAge = () => {
  const currentYear = new Date().getFullYear();
  return currentYear - this.publisherYear;
};

console.log(book.getAge());

book.genre = "판타지";

book.publisherYear = 2000;

console.log(book);
