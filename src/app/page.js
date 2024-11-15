import Image from 'next/image';
// 함수 선언식
//  기명 함수
function func() {}

// 함수호출

const func3 = () => {};

export default function Home() {
  console.log(true ? '참' : '거짓');

  const bool = true;
  const obj = { name: '홍길동', age: 20 };
  const user = {
    weight: 70,
    height: 180,
  };
  const array = ['menu1', 'menu2', 'menu3'];

  const users = [
    { name: '겨울', age: 2 },
    { name: '가을', age: 3 },
    { name: '여름', age: 1 },
  ];
  const info = {
    name: '홍길동',
    phone: null, //null은 값이 없음을 의미
  };

  return (
    <div>
      {/* or연산자는 처음 만나는 참값을 출력 */}
      {info.name}의 전화번호는 {info.phone || '번호가 없습니다.'}입니다.
      <ul>
        {/* {users.map((item, index) => {
          const users = users[0];
          <li key={index}>{`${item.name}이는${item.age}살입니다.`}</li>;
        })} */}
        {/* <li>{`${users[0].name}이는${users[0].age}살입니다.`}</li>
        <li>{`${users[1].name}이는${users[0].age}살입니다.`}</li>
        <li>{`${users[2].name}이는${users[0].age}살입니다.`}</li> */}
      </ul>
      <ul>
        {/* map() 메서드를 사용해서 반복 */}
        {array.map((item, index) => {
          <li key={index}>{item}</li>;
        })}

        <li>{array[0]}</li>
        <li>{array[1]}</li>
        <li>{array[2]}</li>
      </ul>
      {array[0]}, {array[1]}, {array[2]}
      {/* // 나의 배우자는 1명이고 자식은 2명이다 */}
      <hr />
      {bool ? '참' : '거짓'}
      <br />
      {/* obj는 객체라 혼자서는 출력안됨 */}
      {obj.name}, {obj.age}
      <br />
      {obj.name}은{obj.age}살 입니다.
      <br />
      {/* 김겨울의 몸무게는 70kg이고 키는 180cm 입니다. */}
      {obj.name}의 몸무게는 {user.weight}kg이고 키는 {user.height}cm 입니다.
    </div>
  );
}
