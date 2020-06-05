import React from 'react';
import PropTypes from 'prop-types';

/*
function Food(props){
  console.log(props.fav);       // kimchi 출력
	return <h3>I like {props.fav} </h3>;

}

// 처음부터 갖고 있던 데이터가 아니므로 복사 붙여넣기를 해야만 했음
function Food_App() {
  return (
  <div>
    <h1>Hello</h1>
    <Food
      fav="kimchi"
      something={true}
      papapapa={["hello", 1, 2, 3, 4, true]}
    />
    <Food fav="ramyeon" />
    <Food fav="samgyeopsal" />
    <Food fav="chukkumi" />
  </div>
  );
}
*/

function Food({ name, picture, rating }){           // props 객체 안의 name을 인자로 받음
	return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

// 내가 얻고 싶은 props에 대한 설명을 적음
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

// Food의 배열 객체
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf-zaC2jvt_cAnkC2vd3wNjrlpzxDepTPz0mLxqvQ13YDxRY5x&usqp=CAU",
    rating: 4.9
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-NQ6o0akUuUy4YHDKVhLJqJHbnPU8cMTCAFplJpyQv19KVTAW&usqp=CAU",
    rating: 4.5
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBEw_m_jhwjncpGcLelOINleFNCFbl4Bi_t9YVvIFNoDSNe4kv&usqp=CAU",
    rating: 5
  },
  {
    id: 4,
    name: "Doncatsu",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq8Q8Y0z1KDvpAdvi3VHxv1CcuZ-_gnU33OSQvFwuBrgNln2E1&usqp=CAU",
    rating: 4.5
  },
  {
    id: 5,
    name: "Kimbap",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo5t12fe82DI70NsbWOmb8FL28jkn_fktBGv1KMoTYnWKYAr9T&usqp=CAU",
    rating: 4.8
  },
]

/*
function renderFood(dish){
  return <Food name={dish.name} picture={dish.image} />
}
*/

// 웹사이트에서 동적 데이터를 추가하는 방법
function App() {
  return (
  <div>
    {/* dish는 'name'과 'image' 객체를 갖고 있는 <<객체>> 
        -> dish.name, dish.image로 접근 */}
    {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
    {/* {foodILike.map(renderFood)} */}
  </div>
  );
}

export default App;
