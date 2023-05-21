import React from 'react';
import { useSpring, animated } from 'react-spring'

function Number({ n }) {
    const { number } = useSpring({
        from: { number: 10 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Awards = () => {
    return (
        <div className="animation">
        <p className='number'>
            <Number n={28} /><span className='plus'>+</span>
        </p>
        <p className='number_text'>Awards Winning</p>
    </div>

    );
};

export default Awards;