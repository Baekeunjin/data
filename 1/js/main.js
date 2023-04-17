import products from "../../db.json" assert {type:'json'}
//assert {type:'json'}  - 외부파일이 json이라고 확실하게 명시해줘야함
console.log(products)

const button = document.querySelector('button');


//li를 만들어서 ul에 넣어주는 함수
const createItem = (product)=>{
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const img = document.createElement('img');
  const p = document.createElement('p');
  const span = document.createElement('span');

   //각국에 맞는 숫자 서식을 지원하는 객체의 생성자
  const price = new Intl.NumberFormat('ko-KR', { 
    style: 'currency',  //통화단위
    currency: 'KRW'     //원화
  }).format(product.price);    //포맷을 바꿀 데이터


  img.setAttribute('src',product.img);
  li.id = product.id;
  p.className = 'name'; // css 적용 때문!
  p.innerHTML = product.name;
  span.className = "price";
  span.innerText = price;


  li.append(img,p,span)
  ul.append(li)
}


//만든 li들을 반복되게
const importData = ()=>{
  products.data.map((product)=>{
    //계속 추가되는 것을 방지(아이디 값이 이미 있을때는 작동 X)
    if(!document.getElementById(product.id)){
      createItem(product);
    }
  })
}

button.addEventListener('click', importData);