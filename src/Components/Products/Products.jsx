import './Products.scss'
import Product from '../Product/Product'

const Products = (props) => {
    // console.log(props.title);
    return (
        <div className='products_container'>
            <h1>{props.title}</h1>
            <div className="products_wrapper">
                {
                    props.ProductItems?.map((item) => {
                        return (
                            <Product
                                key={item.id}
                                img={item.img}
                                title={item.title}
                                price={item.price}
                                desc={item.desc}
                            />
                        )
                    })

                }
            </div>

        </div>
    )
}

export default Products