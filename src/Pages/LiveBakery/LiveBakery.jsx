import Products from "../../Components/Products/Products"
import {
  plumcake, brownies,  candycake, circuscake, dearcake, dearcake2,  flowercake2, flowercake3, flowercake4, glazecake, goldenblackforest, haldicake, heartcake, majestycake,  minecake, mousse, paintingcake, shahithandai, soulcake, spidermancake, springcake, strawberrycake, trufflepastry, valentinecake, waffles, weddingrose
} from '../../Images/images'
const LiveBakery = () => {
  return (
    <div className='liveBakery_container'>
       <Products title='Live Bakery' ProductItems={liveBakery_Items} />
    </div>
  )
}

export default LiveBakery

const liveBakery_Items = [
  {
    id: 1,
    img: majestycake,
    title: 'Majesty Cake',
    desc: "",
    price: '$10'
  },
 
  {
    id: 2,
    img: brownies,
    title: 'Brownies',
    desc: "Brownies are a square, baked, chocolate dessert. Brownies come in a variety of forms and may be either fudgy or cakey, depending on their density. They may include nuts, frosting, cream cheese, chocolate chips, or other ingredients.",
    price: '$10'
  },
  {
    id: 19,
    img: mousse,
    title: 'Mousse',
    desc: "",
    price: '$10'

  },
  {
    id: 20,
    img: paintingcake,
    title: 'Painting Cake',
    desc: "",
    price: '$10'
  },
  {
    id: 21,
    img: shahithandai,
    title: 'Shahi Thandai',
    desc: "",
    price: '$10'
  },
  // {
  //   id: 3,
  //   img: cake1,
  //   title: 'Cake',
  //   desc: "Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate, and that share features with other desserts such as pastries, meringues, custards, and pies.",
  //   price: '$10'
  // },
  {
    id: 24,
    img: springcake,
    title: 'Spring Cake',
    desc: "",
    price: '$10'
  },
  {
    id: 25,
    img: strawberrycake,
    title: 'Strawberry Cake',
    desc: "",
    price: '$10'
  },
  {
    id: 26,
    img: trufflepastry,
    title: 'Truffle Pastry',
    desc: "",
    price: '$10'
  },
  {
    id: 27,
    img: valentinecake,
    title: 'Valentine Cake',
    desc: "",
    price: '$10'
  },
  {
    id: 28,
    img: waffles,
    title: 'Waffles',
    desc: "",
    price: '$10'
  },
  {
    id: 29,
    img: weddingrose,
    title: 'Wedding Rose',
    desc: "",
    price: '$10'
  },
  { 
    id: 4,
    img: candycake,
    title: 'Candy Cake',
    desc: "Candy Cake is a type of fruitcake made with chopped candied fruit or dried fruit, nuts, and spices, and optionally soaked in spirits. It is popular during the holiday season.",
    price: '$10'
  },
  {
    id: 5,
    img: circuscake,
    title: 'Circus Cake',
    desc: "Circus Cake is a type of fruitcake made with chopped candied fruit or dried fruit, nuts, and spices, and optionally soaked in spirits. It is popular during the holiday season.",
    price: '$10'
  },
  {
    id: 6,
    img: dearcake,
    title: 'Dear Cake',
    desc: "Dear Cake is a type of fruitcake made with chopped candied fruit or dried fruit, nuts, and spices, and optionally soaked in spirits. It is popular during the holiday season.",
    price: '$10'
  },
  {
    id: 7,
    img: dearcake2,
    title: 'Dear Cake 2',
    desc: "Dear Cake 2 is a type of fruitcake made with chopped candied fruit or dried fruit, nuts, and spices, and optionally soaked in spirits. It is popular during the holiday season.",
    price: '$10'
  },
  // {
  //   id: 8,
  //   img : flowercake,
  //   title: 'Flower Cake',
  //   desc: "Flower Cake is a type of fruitcake made with chopped candied fruit or dried fruit, nuts, and spices, and optionally soaked in spirits. It is popular during the holiday season.",
  //   price: '$10'
  // },
  {
    id: 9,
    img: flowercake2,
    title: 'Flower Cake 2',
    desc: "Flower Cake 2 is a type of fruitcake made with chopped candied fruit or dried fruit, nuts, and spices, and optionally soaked in spirits. It is popular during the holiday season.",
    price: '$10'
  },
  
  {
    id: 10,
    img: flowercake3,
    title: 'Flower Cake 3',
    desc: "Flower Cake 3 is a type of fruitcake made with chopped candied fruit or dried fruit, nuts, and spices, and optionally soaked in spirits. It is popular during the holiday season.",  
    price: '$10'
  }, 
  {
    id: 11,
    img: flowercake4,
    title: 'Flower Cake 4',
    desc: "",
    price: '$10'
  },
  {
    id: 12,
    img: glazecake,
    title: 'Glaze Cake',
    desc: "",
    price: '$10'
  },
  {
    id: 13,
    img: goldenblackforest,
    title: 'Golden Black Forest',
    desc: "",
      price: '$10'
  },
  {
    id: 14,
    img: haldicake,
    title: 'Haldi Cake',
    desc: "",
    price: '$10'
  },
  {
    id: 15,
    img: heartcake,
    title: 'Heart Cake',
    desc: "",
    price: '$10'
  },
  {
    id: 16,
    img: plumcake,
    title: 'Plum Cake',
    desc: "Plum Cake is a type of fruitcake made with chopped candied fruit or dried fruit, nuts, and spices, and optionally soaked in spirits. It is popular during the holiday season.",
    price: '$10'
  },
  {
    id: 18,
    img: minecake,
    title: 'Mine Cake',
    desc: "",
    price: '$10'
  },

  {
    id: 22,
    img: soulcake,
    title: 'Soul Cake',
    desc: "",
    price: '$10'
  },
  {
    id: 23,
    img: spidermancake,
    title: 'Spiderman Cake',
    desc: "",
    price: '$10'
  },
  
]