// import './Product.scss'
// import styled from 'styled-components'

// const Image = styled.div`
//     width: 100%;
//     height: 100%;
//     background: url(${props => props.img});
//     background-size: cover;
//     background-position: center center;
//     background-repeat: no-repeat;
//     border-radius: 10px 10px 0 0;

// `
// const Product = (props) => {

//     return (
//         <div className='product_container'>
//             <div className="product_img">
//                 <Image img={props.img} />
//             </div>
//             <div className="product_info">

//                 <p className='title'>{props.title}</p>
//                 <p className='desc'>{props.desc}</p>
//                 {/* <div className='order'>

//                     <p className='price'>{props.price}</p>
//                     <Button >Buy Now</Button>
//                 </div> */}
//             </div>
//         </div>
//     )
// }

// export default Product
import './Product.scss'
import styled from 'styled-components'

const Image = styled.div`
    width: 100%;
    height: 100%;
    background: url(${props => props.img});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 10px 10px 0 0;

`
const Product = (props) => {

    return (
        <div className='product_container'>
            <div className="card">
                <div className="inner-card">

                    <div className="front">
                        <div className="product_img">
                            <Image img={props.img} />
                        </div>
                        <div className="product_info">

                            <p className='title'>{props.title}</p>
                            {/* <p className='desc'>{props.desc}</p> */}
                            {/* <div className='order'>

                                <p className='price'>{props.price}</p>
                                <Button >Buy Now</Button>
                            </div> */}
                        </div>
                    </div>
                    <div className="back">
                        <h1>{props.title}</h1>
                        <span className='desc'>
                            {props.desc}
                        </span>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product