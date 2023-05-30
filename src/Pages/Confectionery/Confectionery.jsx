import Products from '../../Components/Products/Products'
import {
  heengmix, aloobhujia, biji, bikaneribhujia, makhanamix, raja, dalmoth, moongdal,
} from '../../Images/images'
import './Confectionery.scss'


const Confectionery = () => {


  
  return (
    <>
      <div className="confectionery_container">

        <Products title='Namkeen' ProductItems={Namkeen_Items} />
        <br />
        {/* <Products title='Confectionery' ProductItems={Confectionery_Items} /> */}
      </div>
    </>
  )
}

export default Confectionery


const Namkeen_Items = [
  {
    id: 1,
    img: `${heengmix}`,
    title: 'Heeng Mixture',
    desc: "Namkeen savoured with Purest Spice of Heeng (Asafetida), the spiciness of Original Red Chilli to Relish the Taste Never Felt. It is no surprise that this delicacy has earned its place as a Confectionery icon, captivating the palates of food enthusiasts around the world.",
    price: '$10'
  },
  {
    id: 2,
    img: `${raja}`,
    title: 'Nandu Raja',
    desc: "Namkeen with Cashews, This delicacy is a gastronomic masterpiece, combining delicate flavors and exquisite textures to create a truly unforgettable culinary experience.",
    price: '$10'
  },
  {
    id: 3,
    img: `${aloobhujia}`,
    title: 'Aloo Bhujia',
    desc: "Prepared from Potatoes of best quality, from the first taste, you can discern the complexity of flavors that have been carefully layered to create a symphony of taste.",
    price: '$10'
  },
  {
    id: 4,
    img: `${biji}`,
    title: 'Dal Biji',
    desc: ' A Namkeen with Muskmelon Seeds (Kharbuje ki Meeng), it Zests the taste buds of Tongue. Each bite of this delicacy reveals a harmonious blend of flavors that dance on your palate, leaving a lingering sensation of pleasure.',
    price: '$10'

  },
  {
    id: 5,
    img: `${dalmoth}`,
    title: 'Kaju Dalmoth',
    desc: ' A Mixture of Purely Cashews, The presentation of this delicacy is a work of art, meticulously arranged to entice both the eyes and the taste buds.',
    price: '$10'

  },
  {
    id: 6,
    img: `${bikaneribhujia}`,
    title: 'Bikaneri Bhujia',
    desc: 'Deep Fried Bhujia made from Gram Flour, added with Moth, the texture of this delicacy is a revelation, with a perfect balance between tenderness and a slight crispness that adds depth to each bite.',
    price: `$10`
  },
  {
    id: 7,
    img: `${makhanamix}`,
    title: 'Makhanam Mixture',
    desc: ' A Mix of Makhana (Euryale ferox) prepared with utmost precision and using only the finest ingredients, this delicacy is a testament to the skill and artistry of the chef.',
    price: `$10`
  },
  {
    id: 8,
    img: moongdal,
    title: 'Moong Dal',
    desc: 'A Namkeen made purely from Moong (Yellow Lentil), each bite of this delicacy reveals a harmonious blend of flavors that dance on your palate, leaving a lingering sensation of pleasure.',
    price: `$10`
  },



]
