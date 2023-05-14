import React from 'react'
import Products from '../../Components/Products/Products'
import { Goforwheat_Items } from '../../data'

const GoForWheat = () => {
  return (
    <div className='goforwheat_container'>
      <Products title='Go For Wheat'  ProductItems={Goforwheat_Items}/>
    </div>
  )
}

export default GoForWheat