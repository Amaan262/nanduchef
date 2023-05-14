import { ArrowRightOutlined, ArrowLeftOutlined } from '@material-ui/icons'
import './slider.scss'
import { useState, useEffect } from 'react'
import styled from 'styled-components'


const Image = styled.div`
    width: 100%;
    height: 100%;
    background: url(${props => props.img});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;


`

const Slider = (props) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const wrapperstyle = {
        transform: `translateX(${slideIndex * -50}vw)`,
    }
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : props.slideItems.length - 1)
        } else {
            setSlideIndex(slideIndex < props.slideItems.length - 2 ? slideIndex + 1 : 0)
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(slideIndex < props.slideItems.length - 2 ? slideIndex + 1 : 0)
        }, 4000);
        return () => clearInterval(interval);
    }, [props.slideItems.length, slideIndex])


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
                                <Image img={item.img} />

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