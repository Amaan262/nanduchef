
import Slider from '../../Components/Slider/Slider';
import Products from '../../Components/Products/Products';
import {
  namkeen1, namkeen2, namkeen3, namkeen4, namkeen5, namkeen6, namkeen7, slider1, slider2
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
    img: `${slider1}`,
    title: 'Cookies',
    desc: "Twin Badam Cookies",
    bg: 'e19f6c',

  },

  {
    id: 2,
    img: `${slider2}`,
    title: 'Cookies',
    desc: "Twin Badam Cookies",
    bg: 'e19f6c',

  },
  {
    id: 3,
    img: `${slider1}`,
    title: 'Cookies',
    desc: "Twin Badam Cookies",
    bg: 'e19f6c',

  },

  {
    id: 4,
    img: `${slider1}`,
    title: 'Cookies',
    desc: "Twin Badam Cookies",
    bg: 'e19f6c',

  },

];




const Product_Items = [
  {
    id: 1,
    img: `${namkeen1}`,
    title: 'Namkeen',

    desc: "Its  famous in Mumbai.",
    price: '$10'

  },

  {
    id: 2,
    img: `${namkeen2}`,
    title: 'Raja',
    desc: "NEW ARRIVALS.",
    price: '$10'
  },
  {
    id: 3,
    img: `${namkeen3}`,
    title: 'Heeng Mix',
    desc: "NEW ARRIVALS.",
    price: '$10'
  },
  {
    id: 4,
    img: `${namkeen4}`,
    title: 'Heeng Mix',
    desc: "NEW ARRIVALS.",
    price: '$10'
  },
  {
    id: 5,
    img: `${namkeen5}`,
    title: 'Heeng Mix',
    desc: "NEW ARRIVALS.",
    price: '$10'
  },
  {
    id: 6,
    img: `${namkeen6}`,
    title: 'Heeng Mix',
    desc: "NEW ARRIVALS.",
    price: '$10'
  },
  {
    id: 7,
    img: `${namkeen7}`,
    title: 'Heeng Mix',
    desc: "NEW ARRIVALS.",
    price: '$10'
  },


]