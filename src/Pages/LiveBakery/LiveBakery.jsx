import Products from "../../Components/Products/Products"
import {  liveBakery_Items } from "../../data"

const LiveBakery = () => {
  return (
    <div className='liveBakery_container'>
       <Products title='Live Bakery' ProductItems={liveBakery_Items} />
    </div>
  )
}

export default LiveBakery