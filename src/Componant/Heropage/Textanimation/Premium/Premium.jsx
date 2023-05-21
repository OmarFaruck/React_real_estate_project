import React from 'react';
import '../Premium/Premium.css' 
import { useSpring, animated } from 'react-spring'

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 7500 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}


const Premium = () => {
    return (
        <div className="animation">
            <p className='number'> <Number n={9000} /> <span className='plus'>+</span></p>
            <p className='number_text'>Premium Product</p>
        </div>
    );
};

export default Premium;