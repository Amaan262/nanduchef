import { Bakery_biscuits_Items } from '../../data'
import Products from '../../Components/Products/Products'

const BakeryBiscuits = () => {
  return (
    <div className="bakery_container">

    <Products title='Bakery Biscuits' ProductItems={Bakery_biscuits_Items} />

  </div>
  )
}

export default BakeryBiscuits