
import Slider from '../../Components/Slider/Slider';
import Products from '../../Components/Products/Products';
import {
  heengmix, attacookies, attacookies2, plumcake
} from '../../Images/images'


const Home = () => {
  return (
    <>
      <div className="Home_container">
        <Slider slideItems={slider_Items} />
        <Products title='Top Products' ProductItems={Product_Items} />

      </div>
    </>
  )
}

export default Home

const slider_Items = [
  {
    id: 1,
    img: attacookies,
    title: 'Cookies',
    desc: "Twin Badam Cookies",
    bg: 'e19f6c',

  },

  {
    id: 2,
    img: attacookies2,
    title: 'Cookies',
    desc: "Twin Badam Cookies",
    bg: 'e19f6c',

  },
  {
    id: 3,
    img: `${attacookies}`,
    title: 'Cookies',
    desc: "Twin Badam Cookies",
    bg: 'e19f6c',

  },

  {
    id: 4,
    img: `${attacookies2}`,
    title: 'Cookies',
    desc: "Twin Badam Cookies",
    bg: 'e19f6c',

  },

];




const Product_Items = [
  {
    id: 1,
    img: heengmix,
    title: 'Heeng Mixture',
    desc: "Namkeen savoured with Purest Spice of Heeng (Asafetida), the spiciness of Original Red Chilli to Relish the Taste Never Felt. It is no surprise that this delicacy has earned its place as a Confectionery icon, captivating the palates of food enthusiasts around the world.",
    price: '$10'
  },
  {
    id: 2,
    img: attacookies2,
    title: 'Atta Cookies',
    desc: "",
    price: '$10'
  },
  {
    id: 3,
    img: plumcake,
    title: 'Cakes',
    desc: "",
  },
  {
    id: 4,
    img: attacookies2,
    title: 'Bakery Biscuits',
    desc: "",
  },
  {
    id: 5,
    img: attacookies2,
    title: 'Sugar Free Rusk',
    desc: "",
  },
]