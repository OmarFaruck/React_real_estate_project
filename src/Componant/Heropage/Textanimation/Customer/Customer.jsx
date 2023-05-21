import React from 'react';
import { useSpring, animated } from 'react-spring'

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 1000 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}


const Customer = () => {
    return (
        <div className="animation">
            <p className='number'> <Number n={1500} /> <span className='plus'>+</span> </p>
            <p className='number_text'>Happy Customer</p>

        </div>
    );
};

export default Customer;