import Products from '../../Components/Products/Products'
import { Confectionery_Items } from '../../data'
import {
  namkeen1, namkeen2, namkeen3, namkeen4, namkeen5, namkeen6, namkeen7
} from '../../Images/images'
import './Confectionery.scss'


const Confectionery = () => {
  return (
    <>
      <div className="confectionery_container">

        <Products title='Confectionery' ProductItems={Confectionery_Items} />
        <br />
        <Products title='Namkeen' ProductItems={Namkeen_Items} />
      </div>
    </>
  )
}

export default Confectionery


const Namkeen_Items = [

  {
    id: 1,
    img: `${namkeen2}`,
    title: 'Namkeen',
    desc: "NEW ARRIVALS.",
    price: '$10'
  },
  {
    id: 2,
    img: `${namkeen1}`,
    title: 'Biji',

    desc: "Its  famous in Mumbai.",
    price: '$10'

  },

  {
    id: 3,
    img: `${namkeen3}`,
    title: 'Raja',
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
    title: 'Aloo Bhujia',
    desc: "NEW ARRIVALS.",
    price: '$10'
  },
  {
    id: 6,
    img: `${namkeen6}`,
    title: 'Bikaneri Bhujia',
    desc: "NEW ARRIVALS.",
    price: '$10'
  },
  {
    id: 7,
    img: `${namkeen7}`,
    title: 'Makhana Mix',
    desc: "NEW ARRIVALS.",
    price: '$10'
  },


]
