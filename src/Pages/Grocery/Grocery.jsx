import React from 'react'
import Products from '../../Components/Products/Products'
import { Grocery_Items } from '../../data'

const Grocery = () => {
  return (
    <div className='grocery_container'>
        <Products title='Grocery' ProductItems={Grocery_Items}/>
    </div>
  )
}

export default Grocery