import { ArrowRightOutlined, ArrowLeftOutlined } from '@material-ui/icons'
import './slider.scss'
import { useState, useEffect } from 'react'
import styled from 'styled-components'


const Image = styled.div`
    width: 100%;
    height: 100%;
    background: url(${props => props.img});
    background-size: cover;
    background-size: ${props => props.backgroundSize ? props.backgroundSize : 'cover'};
    background-position: center center;
    background-repeat: no-repeat;


`

const Slider = (props) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    // choose the screen size 
    // const handleResize = () => {
    //     if (window.innerWidth <= 700) {
    //         // setIsMobile(true)
    //         setSlideWidth('100')
    //         console.log('mobile')
    //         console.log(slideWidth)
    //     } else {
    //         setSlideWidth('50')
    //         console.log('tablet')
    //         console.log(slideWidth)
    //     }
    // }

    const wrapperstyle = {
        transform: `translateX(${slideIndex * - slideWidth}vw)`,
    }
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : props.slideItems.length - 1)
        } else {
            setSlideIndex(slideIndex < props.slideItems.length - (isMobile? 1 : 2) ? slideIndex + 1 : 0)
        }
    }
    useEffect(() => {
        if (window.innerWidth <= 700) {
            setSlideWidth('100')
            setIsMobile(true)
        }
        else {
            setSlideWidth('50')
            setIsMobile(false)
        }


        // window.addEventListener("resize", handleResize)
        const interval = setInterval(() => {
            setSlideIndex(slideIndex < props.slideItems.length - (isMobile? 1 : 2) ? slideIndex + 1 : 0)
        }, 4000);
        return () => clearInterval(interval);
    }, [props.slideItems.length, slideIndex,isMobile])


    return (
        <>
            <div className="slider-container">
                <div className="arrow left" onClick={() => handleClick('left')}>
                    <ArrowLeftOutlined />
                </div>
                <div className="wrapper" style={wrapperstyle}>
                    {props.slideItems.map(item => (

                        <div className="slide" key={item.id} style={{ backgroundColor: `#${item.bg}` }} >
                            <div className="image-container">
                                {/* <img src={item.img} alt="nothing" /> */}
                                <Image img={item.img} backgroundSize={item.backgroundSize} />

                            </div>
                            {/* <div className="info-container">
                                <p className='title'>{item.title}</p>
                                <p className='desc'>{item.desc}</p>
                                <button>Shop Now</button>
                            </div> */}
                        </div>
                    ))}
                </div>
                <div className="arrow right" onClick={() => handleClick('right')}>
                    <ArrowRightOutlined />
                </div>
            </div>
        </>
    )
}

export default Slider