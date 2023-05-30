import './cart.scss'
import {
    biji, makhanamix,
} from '../../Images/images'

import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import Button from '../../Components/Button/Button'
import { Link } from 'react-router-dom'
// const ProductColor = styled.div`
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     background-color: ${props => props.color};
// `
const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between; 
    margin: 30px 0px;
    font-weight: ${props => props.type === 'total' && '600'};   
    font-size: ${props => props.type === 'totl' && '24px'};
    `
const Cart = () => {
    return (
        <div className='cart_container'>
            {/* <Announcement /> */}
            <div className="cart_wrapper" >
                <h1 className="title">YOUR BAG</h1>
                <div className="top">
                    <Link to='/' className='unfilled'>CONTINUE SHOPPING</Link>
                    <div className="topTexts">
                        <span>Shopping Bag (2)</span>
                        <span>Your Wishlist (0)</span>
                    </div>
                    <Link to='#/'>CHECKOUT NOW</Link>
                </div>
                <div className="bottom">
                    <div className="info">

                        {cart_Items.map((item) => (
                            <>
                                <div className="product" key={item.id}>
                                    <div className="productDetail">
                                        <img src={`${item.img}`} alt={item.id} />
                                        <div className="details">
                                            <p className="productName">
                                                <b>Product:</b> {item.name}
                                            </p>
                                            <p className="productId"> <b>ID: </b>{item.id}</p>
                                            <div className="productSize">
                                                <b>Weight:</b> {item.weight}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="priceDetail">
                                        <div className="productAmountContainer">
                                            <Remove />
                                            <span className="productAmount">2</span>
                                            <Add />

                                        </div>
                                        <div className="productPrice">₹ 30</div>
                                    </div>

                                </div>
                                <hr />
                            </>

                        ))}

                    </div>
                    <div className="summary">
                        <h1 className="summaryTitle">ORDER SUMMARY</h1>
                        <SummaryItem >
                            <span className="summaryItemText">Subtotal</span>
                            <span className="summaryItemPrice">₹ 40</span>
                        </SummaryItem>
                        <SummaryItem>
                            <span className="summaryItemText">Estimated Delivery</span>
                            <span className="summaryItemPrice">₹ 5.90</span>
                        </SummaryItem>
                        <SummaryItem>
                            <span className="summaryItemText">Shipping Discount</span>
                            <span className="summaryItemPrice">₹ -10</span>
                        </SummaryItem>
                        <SummaryItem type='total'>
                            <span className="summaryItemText" type="total">Total</span>
                            <span className="summaryItemPrice">₹ 70</span>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </div>
                </div>
            </div >
        </div >

    )
}

export default Cart




const cart_Items = [
    {
        id: 1,
        name: 'Biji',
        img: biji,
        price: 30,
        qty: 2,
        weight: '500g'
    },
    {
        id: 2,
        name: 'Makhanamix',
        img: makhanamix,
        price: 30,
        qty: 3,
        weight: '500g'
    },

]